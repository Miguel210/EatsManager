import { UpdateMovementDetailDto } from "../../dtos/movementDetail/update-movementDetail";
import { MovementDetailEntity } from "../../entities/movementDetail.entity";
import { MovemenetDetailRepository } from "../../repositories/movementDetail/movementDetail.repository";


export interface UpdateMovementDetailUseCase {
    execute(dto: UpdateMovementDetailDto): Promise<MovementDetailEntity>;
}

export class UpdateMovementDetail implements UpdateMovementDetailUseCase {

    constructor(
        private readonly repository: MovemenetDetailRepository
    ) {}

    execute(dto: UpdateMovementDetailDto): Promise<MovementDetailEntity> {
        return this.repository.update(dto);
    }
}