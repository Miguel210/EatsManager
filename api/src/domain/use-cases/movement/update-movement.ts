import { UpdateMovementDto } from "../../dtos/movement/update-movement.dto";
import { MovementEntity } from "../../entities/movement.entity";
import { MovementRepository } from "../../repositories/movement/movement.repository";



export interface UpdateMovementUseCase {
    execute(dto: UpdateMovementDto): Promise<MovementEntity>
}


export class CreateMovement implements UpdateMovementUseCase {

    constructor(
        private readonly repository: MovementRepository 
    ) {}

    execute(dto: UpdateMovementDto): Promise<MovementEntity> {
        return this.repository.update(dto);
    }
}