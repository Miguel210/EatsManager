import { MovementDatasource } from "../../../domain/datasource/movement/movement.datasource";
import { CreateMovementDto } from "../../../domain/dtos/movement/create-movement.dto";
import { UpdateMovementDto } from "../../../domain/dtos/movement/update-movement.dto";
import { MovementEntity } from "../../../domain/entities/movement.entity";



export class MovementRepositoryImpl implements MovementDatasource {

    constructor(
        private readonly datasource: MovementDatasource
    ) {}
    create(dto: CreateMovementDto): Promise<MovementEntity> {
        throw new Error("Method not implemented.");
    }
    getById(id: string): Promise<MovementEntity> {
        throw new Error("Method not implemented.");
    }
    getAll(form: any): Promise<MovementEntity[]> {
        throw new Error("Method not implemented.");
    }
    update(dto: UpdateMovementDto): Promise<MovementEntity> {
        throw new Error("Method not implemented.");
    }

    
}