import { CreateDevolutionClientDto } from "../../dtos/devolutionClient/create-devolutionClient.dto";
import { DevolutionClientEntity } from "../../entities/devolutionClient.entity";
import { DevolutionClientRepository } from "../../repositories/devolutionClient/devolutionClient.repository";


export interface CreateDevolutionClientUseCase {
    execute(dto: CreateDevolutionClientDto): Promise<DevolutionClientEntity>;
}


export class CreateDevolutionClient implements CreateDevolutionClientUseCase {

    constructor(
        private readonly repository: DevolutionClientRepository
    ) {}
    
    execute(dto: CreateDevolutionClientDto): Promise<DevolutionClientEntity> {
        return this.repository.create(dto)
    }
}