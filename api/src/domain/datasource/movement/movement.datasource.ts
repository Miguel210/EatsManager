import { CreateMovementDto } from "../../dtos/movement/create-movement.dto";
import { UpdateMovementDto } from "../../dtos/movement/update-movement.dto";
import { MovementEntity } from "../../entities/movement.entity";




export abstract class MovementDatasource {
    
    abstract create(dto: CreateMovementDto): Promise <MovementEntity>;
    abstract getById(id: string): Promise <MovementEntity>;
    abstract getAll(form: any): Promise <MovementEntity[]>;
    abstract update(dto: UpdateMovementDto): Promise <MovementEntity>;

}