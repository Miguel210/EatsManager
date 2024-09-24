import { ModuleDatasource } from '../../../domain/datasource/module/module.datasource';
import { ModuleEntity } from '../../../domain/entities/module.enity';
import { ModuleRepository } from '../../../domain/repositories/module/module.repository';



export class ModelRepositoryImpl implements ModuleRepository {

    constructor(
        private readonly datasource: ModuleDatasource
    ){}

    findById(id: string): Promise<ModuleEntity> {
        return this.datasource.findById(id)
    }

}