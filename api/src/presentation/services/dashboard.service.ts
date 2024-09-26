import { ModulesDto } from "../../domain/dtos/module/create-module.dto";
import { ModuleService } from "./module.service";



export class DashboardService {

    constructor(
        readonly moduleService: ModuleService
    ){}

    public async charge(moduelDto: ModulesDto){
        
        return this.moduleService.modules(moduelDto)

    }
}