import { MovemenetDetailDatasource } from "../../../domain/datasource/movementDetail/movementDetail.datasource";
import { CreateMovementDetailDto } from "../../../domain/dtos/movementDetail/create-movementDetail";
import { UpdateMovementDetailDto } from "../../../domain/dtos/movementDetail/update-movementDetail";
import { MovementDetailEntity } from "../../../domain/entities/movementDetail.entity";
import { MovemenetDetailRepository } from "../../../domain/repositories/movementDetail/movementDetail.repository";



export class MovementDetailRepositoryImpl implements MovemenetDetailRepository {

    constructor(
        private readonly datasource: MovemenetDetailDatasource
    ) {}
    create(dto: CreateMovementDetailDto): Promise<MovementDetailEntity> {
        return this.datasource.create(dto)
    }
    get(id: string): Promise<MovementDetailEntity> {
        return this.datasource.get(id)
    }
    getAll(form: any): Promise<MovementDetailEntity[]> {
        return this.datasource.getAll(form)
    }
    update(dto: UpdateMovementDetailDto): Promise<MovementDetailEntity> {
        return this.datasource.update(dto)
    }
    delete(id: string): Promise<MovementDetailEntity> {
        return this.datasource.delete(id)
    }

    
}