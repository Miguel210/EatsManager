import { ModuleEntity } from "../../entities/module.enity";




export abstract class ModuleDatasource {

    abstract findById(id: string): Promise<ModuleEntity[]>
}