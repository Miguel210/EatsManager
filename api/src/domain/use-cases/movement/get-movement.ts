import { MovementEntity } from "../../entities/movement.entity";
import { MovementRepository } from "../../repositories/movement/movement.repository";



export interface GetMovementUseCase {
    execute(id: string): Promise<MovementEntity>
}


export class GetMovement implements GetMovementUseCase {

    constructor(
        private readonly repository: MovementRepository 
    ) {}

    execute(id: string): Promise<MovementEntity> {
        return this.repository.getById(id);
    }
}