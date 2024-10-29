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
                subTotal: dto.subtotal,
                tax: dto.tax,
                total: dto.total,
                costUnit: dto.costUnit,
                promotionId: dto.promotionId
            }
        })

        if( !movement ) throw `movementDetail with data ${dto} not found`;
        return MovementDetailEntity.fromObject(movement);
    }
    get(id: string): Promise<MovementDetailEntity> {
        throw new Error("Method not implemented.");
    }
    getAll(form: any): Promise<MovementDetailEntity[]> {
        throw new Error("Method not implemented.");
    }
    update(dto: UpdateMovementDetailDto): Promise<MovementDetailEntity> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<MovementDetailEntity> {
        throw new Error("Method not implemented.");
    }

}