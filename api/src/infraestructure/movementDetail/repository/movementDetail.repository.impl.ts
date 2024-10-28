import { MovemenetDetailDatasource } from "../../../domain/datasource/movementDetail/movementDetail.datasource";
import { CreateMovementDetailDto } from "../../../domain/dtos/movementDetail/create-movementDetail";
import { UpdateMovementDetailDto } from "../../../domain/dtos/movementDetail/update-movementDetail";
import { MovementDetailEntity } from "../../../domain/entities/movementDetail.entity";



export class MovementDetailRepositoryImpl implements MovemenetDetailDatasource {

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
        return this.getAll(form)
    }
    update(dto: UpdateMovementDetailDto): Promise<MovementDetailEntity> {
        return this.datasource.update(dto)
    }
    delete(id: string): Promise<MovementDetailEntity> {
        return this.datasource.delete(id)
    }

    
}