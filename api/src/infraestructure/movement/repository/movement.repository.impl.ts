import { MovementDatasource } from "../../../domain/datasource/movement/movement.datasource";
import { CreateMovementDto } from "../../../domain/dtos/movement/create-movement.dto";
import { UpdateMovementDto } from "../../../domain/dtos/movement/update-movement.dto";
import { MovementEntity } from "../../../domain/entities/movement.entity";



export class MovementRepositoryImpl implements MovementDatasource {

    constructor(
        private readonly datasource: MovementDatasource
    ) {}
    create(dto: CreateMovementDto): Promise<MovementEntity> {
        return this.datasource.create(dto);
    }
    getById(id: string): Promise<MovementEntity> {
        return this.datasource.getById(id);
    }
    getAll(form: any): Promise<MovementEntity[]> {
        return this.datasource.getAll(form);
    }
    update(dto: UpdateMovementDto): Promise<MovementEntity> {
        return this.datasource.update(dto);
    }

}