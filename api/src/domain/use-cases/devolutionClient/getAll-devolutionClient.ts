import { DevolutionClientEntity } from "../../entities/devolutionClient.entity";
import { DevolutionClientRepository } from "../../repositories/devolutionClient/devolutionClient.repository";


export interface GetAllDevolutionClientUseCase {
    execute(form: any): Promise<DevolutionClientEntity[]>;
}


export class GetAllDevolutionClient implements GetAllDevolutionClientUseCase {

    constructor(
        private readonly repository: DevolutionClientRepository
    ) {}
    
    execute(form: any): Promise<DevolutionClientEntity[]> {
        return this.repository.getAll(form)
    }
}