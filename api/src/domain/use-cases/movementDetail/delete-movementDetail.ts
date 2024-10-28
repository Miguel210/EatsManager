import { CreateMovementDetailDto } from "../../dtos/movementDetail/create-movementDetail";
import { MovementEntity } from "../../entities/movement.entity";
import { MovementDetailEntity } from "../../entities/movementDetail.entity";
import { MovemenetDetailRepository } from "../../repositories/movementDetail/movementDetail.repository";


export interface DeleteMovementDetailUseCase {
    execute(id: string): Promise<MovementDetailEntity>;
}

export class DeleteMovementDetail implements DeleteMovementDetailUseCase {

    constructor(
        private readonly repository: MovemenetDetailRepository
    ) {}

    execute(id: string): Promise<MovementDetailEntity> {
        return this.repository.delete(id);
    }
}