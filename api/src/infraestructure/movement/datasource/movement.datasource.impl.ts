import { Uuid } from "../../../config";
import { prisma } from "../../../data";
import { MovementDatasource } from "../../../domain/datasource/movement/movement.datasource";
import { CreateMovementDto } from "../../../domain/dtos/movement/create-movement.dto";
import { UpdateMovementDto } from "../../../domain/dtos/movement/update-movement.dto";
import { MovementEntity } from "../../../domain/entities/movement.entity";
import { MovementDetailDatasourceImpl } from "../../movementDetail/datasource/movementDetail.datasource.impl";
import { CreateMovementDetailDto } from '../../../domain/dtos/movementDetail/create-movementDetail';
import { SupplierOrderDatasourceImpl } from "../../supplierOrder/datasource/supplierOrder.datasource.impl";
import { EmployeeDatasourceImpl } from "../../employee/datasource/employee.datasource.impl";
import { DocuemntDatasourceImpl } from '../../document/datasource/document.datasource.impl';
import { InventoryDatasourceImpl } from '../../inventory/datasource/inventory.datasource.impl';
import { ProductDatasourceImpl } from '../../product/datasource/product.datasource.impl';




export class MovementDatasourceImpl implements MovementDatasource {

    async create(dto: CreateMovementDto): Promise<MovementEntity> {

        
        const employeeImpl = new EmployeeDatasourceImpl();
        const movementDetailImpl = new MovementDetailDatasourceImpl();
        const docuemntDatasourceImpl = new DocuemntDatasourceImpl();
        const inventoryDatasourceImpl = new InventoryDatasourceImpl();
        const productDatasourceImpl = new ProductDatasourceImpl();

        const form = {
            personId: [dto.elaborateId],
        }
        const elaborate = await employeeImpl.gets(form);
        

        const movement = await prisma.movement.create({
            data: {
                id: Uuid.uuid(),
                personId: dto.personId,
                documentId: dto.documentId,
                elaborateId: elaborate[0].id,
                amount: dto.amout,
                status: dto.status,
                isActive: true,
                referenceId: dto.referenceId || undefined,
                date: new Date(),
            }
        });

        
        
        if (!movement) throw `Movement with data ${dto} not created`;
    
        if (!Array.isArray(dto.MovementDetailDto)) { 
            throw new Error('MovementDetailDto debe ser un arreglo'); 
        }

        dto.MovementDetailDto
        .map(async e => {
            
            
            const [error, detailDto] = CreateMovementDetailDto.create({...e, movementId: movement.id })
            
            if( error ) throw `Error CreateMovementDetailDto: ${error}`;
            
            movementDetailImpl.create({...detailDto!})

            inventoryDatasourceImpl.create({movementId: movement.id, product: e.product.id, quantity: e.quantity})


            if (typeof e.quantity !== 'number') { 
                throw new Error('El valor de decrementAmount debe ser un número'); 
            }
            const product = await productDatasourceImpl.findById(e.product.id);

            const objProduct = JSON.parse(JSON.stringify(product));
            console.log(',,,,,,,,,,,,,,,,,,,,,,');
            
            const useStock = objProduct.productTypeId.useStock;
            console.log(',,,,,,,,,,,,,,,,,,,,,,');
            
            if(useStock) {

                productDatasourceImpl.updateQuantity({id: e.product.id, quantity: e.quantity})
            };
    
        })


        const order = new SupplierOrderDatasourceImpl();
        order.create({...dto.SupplierOrderDto, movementId: movement.id})
    
        
        docuemntDatasourceImpl.update({id: dto.documentId, folio: 1, isActive: true, description: 'Compra'})



        return MovementEntity.fromObject(movement);

    }
    async getById(id: string): Promise<MovementEntity> {

        const movement = await prisma.movement.findFirst({
            where: {
                id: id
            },
            select: {
                id: true,
                person: {
                    select: {
                        id: true,
                        fullname: true
                    }
                },
                document: {
                    select: {
                        id: true,
                        description: true
                    }
                },
                supplierOrders: {
                    select: {
                        id: true,
                        invoiceFolio: true,
                        paymentDate: true,
                        isActive: true,
                        status: true

                    }
                },
                elaborateId: true,
                amount: true,
                status: true,
                isActive: true,
                referenceId: true,
                date: true,
                movementDetail: {
                    select: {
                        id: true,
                        product: {
                            select: {

                                id: true,
                                description: true
                            }
                        },
                        quantity: true,
                        priceUnit: true,
                        subTotal: true,
                        tax: true,
                        total: true,
                        costUnit: true,
                    }
                }
            }
        })
        
        if (!movement) throw `Movement with id ${id} not created`;
        return MovementEntity.fromObject(movement);

    }
    async getAll(form: any): Promise<MovementEntity[]> {

        const movement = await prisma.movement.findMany({
            where: {
                person: {
                    profileId: '0402cc9c-0992-4ad8-ab70-142522d2815f'
                },
                documentId: {
                    in: form.documentId || undefined
                },
                elaborateId: {
                    in: form.elaborateId || undefined
                },
                status: {
                    in: form.status || undefined
                },
                isActive: form.isActive,
                date: form.date
            },
            select: {
                id: true,
                person: {
                    select: {
                        fullname: true

                    },
                
                },
                document: {
                    select: {
                        description: true,
                        folio: true
                    }
                },
                supplierOrders: {
                    select: {
                        id: true,
                        invoiceFolio: true,
                        paymentDate: true,
                        isActive: true,
                        status: true

                    }
                },
                amount: true,
                status: true,
                isActive: true,
                date: true,
                employees: {
                    select: {
                        person: {
                            select: {
                                fullname: true
                            }
                        }
                    }
                },
            }
        })

        if (!movement) throw `Movements with form ${form} not found`;
        return movement.map(movement => MovementEntity.fromObject(movement));

    }
    async update(dto: UpdateMovementDto): Promise<MovementEntity> {
        await this.getById(dto.id);
        console.log(dto);
        
        const movement = await prisma.movement.update({
            where: {
                id: dto.id
            },
            data: {
                amount: dto.amout,
                status: dto.status,
                isActive: dto.isActive,
                }
            });
            
                
        if (!movement) throw `Movements with id ${dto.id} not found`;
        
        const detail = new MovementDetailDatasourceImpl();
        const order = new SupplierOrderDatasourceImpl();

        order.update({...dto.supplierOrders[0], status: dto.status})
        
        dto.movementDetailDto.filter( e => !e.id).map( e =>{
            
            const [error, detailDto] = CreateMovementDetailDto.create({...e, productId: e.product.id,  movementId: dto.id})
            if( error ) throw `Error createMovementDetailDto`;
            detail.create(detailDto!)

        })
        dto.movementDetailDto.filter( e => e.id).map( e =>{
            
            detail.update({...e, productId: e.product.id})

        })

        return MovementEntity.fromObject(movement);

    }

}