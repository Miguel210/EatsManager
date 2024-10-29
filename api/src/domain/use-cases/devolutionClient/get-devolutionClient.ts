import { DevolutionClientEntity } from "../../entities/devolutionClient.entity";
import { DevolutionClientRepository } from "../../repositories/devolutionClient/devolutionClient.repository";


export interface GetDevolutionClientUseCase {
    execute(id: string): Promise<DevolutionClientEntity>;
}


export class GetDevolutionClient implements GetDevolutionClientUseCase {

    constructor(
        private readonly repository: DevolutionClientRepository
    ) {}
    
    execute(id: string): Promise<DevolutionClientEntity> {
        return this.repository.get(id)
    }
}