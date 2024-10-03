import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { ModulesDto } from "../../domain/dtos/module/create-module.dto";
import { DashboardService } from "../services/dashboard.service";



export class DashboardController {

    constructor(
        private readonly dashboardService: DashboardService
    ){}

    private handleEror = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }

        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }

    inicio = (req: Request, res: Response) => {
        //console.log(req.params.module);
        const data = req.body._meta;

        console.log(data);
        let a:  string[] = [];
        for (let index = 0; index < data.operation.length; index++) {
            const element = data.operation[index].operation.name;
            a.push(element) ;
            
        }

        console.log(a);
        
        //const ops = data.f
        
        
        /*
        const [error, moduleEntity] = ModulesDto.modules(req.body.user)
        if( error ) throw res.status(400).json({error})

          //  console.log(moduleEntity);
            */

        this.dashboardService.charge(a)
        .then( dashboard => res.json(dashboard))
        .catch( error => this.handleEror(error,res))

    }
    
}