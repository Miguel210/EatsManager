import { UpdateGarrisonDto } from "../../dtos/garrison/update-garrison.dto";
import { GarrisonEntity } from "../../entities/garrison.entity";
import { GarrisonRepository } from "../../repositories/garrison/garrison.repository";


export interface GetGarrisonsUseCase {
    execute(dishId: string): Promise <GarrisonEntity[]>;
}


export class GetGarrisons implements GetGarrisonsUseCase {

    constructor(
        private readonly repository: GarrisonRepository
    ) {}

    execute(dishId: string): Promise<GarrisonEntity[]> {
        return this.repository.getAll(dishId)
    }
}