import { MovementDetailEntity } from "../../entities/movementDetail.entity";
import { MovemenetDetailRepository } from "../../repositories/movementDetail/movementDetail.repository";


export interface GetMovementDetailUseCase {
    execute(id: string): Promise<MovementDetailEntity>;
}

export class GetMovementDetail implements GetMovementDetailUseCase {

    constructor(
        private readonly repository: MovemenetDetailRepository
    ) {}

    execute(id: string): Promise<MovementDetailEntity> {
        return this.repository.get(id);
    }
}