import { CustomError } from "../../domain";
import { ModulesDto } from "../../domain/dtos/module/create-module.dto";
import { ModuleRepository } from "../../domain/repositories/module/module.repository";
import { GetsModule } from "../../domain/use-cases/module/get-module";




export class ModuleService {

    constructor(
    readonly moduleRepository: ModuleRepository
    ) {}


    public async ModulesDto(modulesDto: ModulesDto){

        const modules = await new GetsModule(this.moduleRepository).execute(modulesDto.id)
        .then(module => module )
        .catch( error => error )

        if( !modules ) throw CustomError.internalServer('Modules already Exist')

        return {
            modules: modules
        }

    }
}