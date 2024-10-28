import { CreateMovementDetailDto } from "../../dtos/movementDetail/create-movementDetail";
import { UpdateMovementDetailDto } from "../../dtos/movementDetail/update-movementDetail";
import { MovementDetailEntity } from "../../entities/movementDetail.entity";




export abstract class MovemenetDetailRepository {

    abstract create(dto: CreateMovementDetailDto): Promise<MovementDetailEntity>;
    abstract get(id: string): Promise<MovementDetailEntity>;
    abstract getAll(form: any): Promise<MovementDetailEntity[]>;
    abstract update(dto: UpdateMovementDetailDto): Promise<MovementDetailEntity>;
    abstract delete(id: string): Promise<MovementDetailEntity>;
}