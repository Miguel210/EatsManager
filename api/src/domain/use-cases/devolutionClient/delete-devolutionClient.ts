import { DevolutionClientEntity } from "../../entities/devolutionClient.entity";
import { DevolutionClientRepository } from "../../repositories/devolutionClient/devolutionClient.repository";


export interface DeleteDevolutionClientUseCase {
    execute(id: string ): Promise<DevolutionClientEntity>;
}


export class DeleteDevolutionClient implements DeleteDevolutionClientUseCase {

    constructor(
        private readonly repository: DevolutionClientRepository
    ) {}
    
    execute(id: string ): Promise<DevolutionClientEntity> {
        return this.repository.delete(id)
    }
}