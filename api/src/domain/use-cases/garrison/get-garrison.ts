import { UpdateGarrisonDto } from "../../dtos/garrison/update-garrison.dto";
import { GarrisonEntity } from "../../entities/garrison.entity";
import { GarrisonRepository } from "../../repositories/garrison/garrison.repository";


export interface GetGarrisonUseCase {
    execute(id: string): Promise <GarrisonEntity>;
}


export class GetGarrison implements GetGarrisonUseCase {

    constructor(
        private readonly repository: GarrisonRepository
    ) {}

    execute(id: string): Promise<GarrisonEntity> {
        return this.repository.getById(id)
    }
}