import { log } from "console";
import { Uuid } from "../../../config";
import { prisma } from "../../../data";
import { MovemenetDetailDatasource } from "../../../domain/datasource/movementDetail/movementDetail.datasource";
import { CreateMovementDetailDto } from "../../../domain/dtos/movementDetail/create-movementDetail";
import { UpdateMovementDetailDto } from "../../../domain/dtos/movementDetail/update-movementDetail";
import { MovementDetailEntity } from "../../../domain/entities/movementDetail.entity";



export class MovementDetailDatasourceImpl implements MovemenetDetailDatasource {
    
    async create(dto: CreateMovementDetailDto): Promise<MovementDetailEntity> {
        
        const movement = await prisma.movementDetail.create({
            data: {
                id: Uuid.uuid(),
                movementId: dto.movementId,
                quantity: dto.quantity,
                productId: dto.productId,
                priceUnit: dto.priceUnit,
                subTotal: dto.subTotal,
                tax: dto.tax,
                total: dto.total,
                costUnit: dto.costUnit,
                promotionId: dto.promotionId
            }
        })

        if( !movement ) throw `movementDetail with data ${dto} not found`;
        return MovementDetailEntity.fromObject(movement);
    }
    async get(id: string): Promise<MovementDetailEntity> {
        const movement = await prisma.movementDetail.findFirst({
            where: {
                id: id
            }
        })

        if( !movement ) throw `movementDetail with id ${id} not found`;

        return MovementDetailEntity.fromObject(movement)
    }
    async getAll(form: any): Promise<MovementDetailEntity[]> {
        
        const movement = await prisma.movementDetail.findMany({
            where: {
                isActive: form.isActive,
                productId: {
                    in: form.productId || undefined
                },
            },
            select: {
                id: true,
                movement: {
                    select: {
                        document: {
                            select: {
                                description: true,
                                folio: true
                            }
                        }
                    }
                },
                quantity: true,
                product: {
                    select: {
                        description : true
                    }
                },
                priceUnit: true,
                subTotal: true,
                tax: true,
                total: true,
                costUnit: true,
                promotionId: true,
                isActive: true                
            }
        })
        
        if( !movement ) throw `movementDetail with form ${form} not found`;
        

        return movement.map(movement => MovementDetailEntity.fromObject(movement))
    }
    async update(dto: UpdateMovementDetailDto): Promise<MovementDetailEntity> {

        await this.get(dto.id)

        const movement = await prisma.movementDetail.update({
            where: {
                id: dto.id
            },
            data: {
                productId: dto.product.id,
                quantity: dto.quantity,
                priceUnit: dto.priceUnit,
                subTotal: dto.subTotal,
                tax: dto.tax,
                total: dto.total,
                costUnit: dto.costUnit,
                isActive: dto.isActive
            }
        })
        if( !movement ) throw `movementDetail with id ${dto.id} not found`;        

        return MovementDetailEntity.fromObject(movement)

    }
    async delete(id: string): Promise<MovementDetailEntity> {

        const movement = await prisma.movementDetail.update({
            where: {
                id: id
            },
            data: {
                /*isDelete: true,
                deleteAt: new Date()*/
            }
        })

        if( !movement ) throw `movementDetail with id ${id} not found`;

        return MovementDetailEntity.fromObject(movement)
    }

}