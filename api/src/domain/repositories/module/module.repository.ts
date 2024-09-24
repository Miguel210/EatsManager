import { ModuleEntity } from "../../entities/module.enity";




export abstract class ModuleRepository {

    abstract findById(id: string): Promise<ModuleEntity>
}