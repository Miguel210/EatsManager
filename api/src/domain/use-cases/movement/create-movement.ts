import { CreateMovementDto } from "../../dtos/movement/create-movement.dto";
import { MovementEntity } from "../../entities/movement.entity";
import { MovementRepository } from "../../repositories/movement/movement.repository";



export interface CreateMovementUseCase {
    execute(dto: CreateMovementDto): Promise<MovementEntity>
}


export class CreateMovement implements CreateMovementUseCase {

    constructor(
        private readonly repository: MovementRepository 
    ) {}

    execute(dto: CreateMovementDto): Promise<MovementEntity> {
        return this.repository.create(dto);
    }
}