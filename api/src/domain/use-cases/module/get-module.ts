import { ModuleEntity } from "../../entities/module.enity";
import { ModuleRepository } from "../../repositories/module/module.repository";



export interface GetModuleUseCase {
    execute(id: string): Promise<ModuleEntity>
}


export class GetsModule implements GetModuleUseCase {

    constructor(
        private readonly repository: ModuleRepository
    ){}
    execute(id: string): Promise<ModuleEntity> {
        return this.repository.findById(id);
    }
    
}