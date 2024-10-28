import { CreateMovementDetailDto } from "../../dtos/movementDetail/create-movementDetail";
import { MovementDetailEntity } from "../../entities/movementDetail.entity";
import { MovemenetDetailRepository } from "../../repositories/movementDetail/movementDetail.repository";


export interface CreateMovementDetailUseCase {
    execute(dto: CreateMovementDetailDto): Promise<MovementDetailEntity>;
}

export class CreateMovementDetail implements CreateMovementDetailUseCase {

    constructor(
        private readonly repository: MovemenetDetailRepository
    ) {}

    execute(dto: CreateMovementDetailDto): Promise<MovementDetailEntity> {
        return this.repository.create(dto);
    }
}