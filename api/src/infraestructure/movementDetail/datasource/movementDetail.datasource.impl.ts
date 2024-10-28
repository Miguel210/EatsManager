import { MovemenetDetailDatasource } from "../../../domain/datasource/movementDetail/movementDetail.datasource";
import { CreateMovementDetailDto } from "../../../domain/dtos/movementDetail/create-movementDetail";
import { UpdateMovementDetailDto } from "../../../domain/dtos/movementDetail/update-movementDetail";
import { MovementDetailEntity } from "../../../domain/entities/movementDetail.entity";



export class MovementDetailDatasourceImpl implements MovemenetDetailDatasource {
    
    create(dto: CreateMovementDetailDto): Promise<MovementDetailEntity> {
        throw new Error("Method not implemented.");
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