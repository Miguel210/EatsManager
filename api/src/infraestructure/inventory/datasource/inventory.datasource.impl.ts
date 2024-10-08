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
    async getAll(): Promise<InventoryEntity[]> {

        const inventories = prisma.inventory.findMany({
            where: {
                product: {
                    productType: {
                        isActive: true
                    }
                }
            },
            include: {
                product: {
                    select: {
                        description: true,
                        code: true,
                        price: true,
                    }
                },
                movement: {
                    
                }
            }
        });

        
//        console.log((await inventories).map(e => e));

        return (await inventories).map( inventory => InventoryEntity.fromObject(inventory));
    }

}