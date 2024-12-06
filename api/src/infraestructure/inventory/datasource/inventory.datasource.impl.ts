import { Uuid } from "../../../config";
import { prisma } from "../../../data";
import { InventoryDatasource } from "../../../domain/datasource/inventory/inventory.datasource";
import { CreateInventoryDto } from "../../../domain/dtos/inventory/create-inventory.dto";
import { InventoryEntity } from "../../../domain/entities/inventory.entity";



export class InventoryDatasourceImpl implements InventoryDatasource {
    
    async create(createInventoryDto: CreateInventoryDto): Promise<InventoryEntity> {

        
        const inventory = await prisma.inventory.create({
            data: {
                id: Uuid.uuid(),
                movementId: createInventoryDto.movementId,
                productId: createInventoryDto.product,
                quantity: createInventoryDto.quantity
            }
        })

        if( !inventory ) throw `Inventory no created`;
        
        return InventoryEntity.fromObject(inventory);
    }


    async getAll(obj: any): Promise<InventoryEntity[]> {

        //const date: Date[] = [new Date(obj.date)] 
        
        const inventories = prisma.inventory.findMany({
            
            where: {
                product: {
                    categoryId: {
                        in: obj.category || undefined
                    },
                    code: {
                        in: obj.code || undefined
                    },
                    productTypeId: { 
                        in: obj.productType || undefined
                    },
                    description: {
                        in: obj.description || undefined
                    },
                },
                movement: {
                    date: obj.date || undefined
                }
            },
            include: {
                product: {
                    select: {
                        description: true,
                        code: true,
                        category: true,
                        productType: {
                            select: {
                                description: true
                            }
                        }
                    }
                },
                movement: {
                    select: {
                        document: {
                            select: {
                                description: true,
                                folio: true
                            }
                        }
                    }
                }
            }
        });

        return (await inventories).map( inventory => InventoryEntity.fromObject(inventory));
    }

}