import { MovementDetailEntity } from "../../entities/movementDetail.entity";
import { MovemenetDetailRepository } from "../../repositories/movementDetail/movementDetail.repository";


export interface GetAllMovementDetailUseCase {
    execute(form: any): Promise<MovementDetailEntity[]>;
}

export class GetAllMovementDetail implements GetAllMovementDetailUseCase {

    constructor(
        private readonly repository: MovemenetDetailRepository
    ) {}

    execute(form: any): Promise<MovementDetailEntity[]> {
        return this.repository.getAll(form);
    }
}