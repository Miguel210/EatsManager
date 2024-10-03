import { ModulesDto } from "../../domain/dtos/module/create-module.dto";
import { ModuleService } from "./module.service";



export class DashboardService {

    constructor(
        readonly moduleService: ModuleService
    ){}

    public async charge(data: string[]){
        
        const datas = data[0]
        return {
            data: datas
        }

    }
}