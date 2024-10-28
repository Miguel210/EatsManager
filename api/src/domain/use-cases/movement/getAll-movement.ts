import { MovementEntity } from "../../entities/movement.entity";
import { MovementRepository } from "../../repositories/movement/movement.repository";



export interface GetAllMovementUseCase {
    execute(form: any): Promise<MovementEntity[]>
}


export class GetAllMovement implements GetAllMovementUseCase {

    constructor(
        private readonly repository: MovementRepository 
    ) {}

    execute(form: any): Promise<MovementEntity[]> {
        return this.repository.getAll(form);
    }
}