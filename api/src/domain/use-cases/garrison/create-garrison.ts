import { CreateGarrisonDto } from "../../dtos/garrison/create-garrison.dto";
import { GarrisonEntity } from "../../entities/garrison.entity";
import { GarrisonRepository } from "../../repositories/garrison/garrison.repository";


export interface CreateGarrisonUseCase {
    execute(dto: CreateGarrisonDto): Promise <GarrisonEntity>;
}


export class CreateGarrison implements CreateGarrisonUseCase {

    constructor(
        private readonly repository: GarrisonRepository
    ) {}

    execute(dto: CreateGarrisonDto): Promise<GarrisonEntity> {
        return this.repository.create(dto)
    }
}