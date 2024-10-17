import { UpdateGarrisonDto } from "../../dtos/garrison/update-garrison.dto";
import { GarrisonEntity } from "../../entities/garrison.entity";
import { GarrisonRepository } from "../../repositories/garrison/garrison.repository";


export interface UpdateGarrisonUseCase {
    execute(dto: UpdateGarrisonDto): Promise <GarrisonEntity>;
}


export class UpdateGarrison implements UpdateGarrisonUseCase {

    constructor(
        private readonly repository: GarrisonRepository
    ) {}

    execute(dto: UpdateGarrisonDto): Promise<GarrisonEntity> {
        return this.repository.update(dto)
    }
}