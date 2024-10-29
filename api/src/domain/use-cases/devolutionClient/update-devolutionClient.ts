import { UpdateDevolutionClientDto } from "../../dtos/devolutionClient/update-devolutionClient.dto";
import { DevolutionClientEntity } from "../../entities/devolutionClient.entity";
import { DevolutionClientRepository } from "../../repositories/devolutionClient/devolutionClient.repository";


export interface UpdateDevolutionClientUseCase {
    execute(dto: UpdateDevolutionClientDto): Promise<DevolutionClientEntity>;
}


export class UpdateDevolutionClient implements UpdateDevolutionClientUseCase {

    constructor(
        private readonly repository: DevolutionClientRepository
    ) {}
    
    execute(dto: UpdateDevolutionClientDto): Promise<DevolutionClientEntity> {
        return this.repository.update(dto)
    }
}