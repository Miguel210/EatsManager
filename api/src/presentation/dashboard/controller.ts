import { Request, Response } from "express";
import { CustomError } from "../../domain";
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
        const data = req.body._meta //.operation[0].operationId;

        //console.log(data);
        let a:  string[] = [];
        for (let index = 0; index < data.operation.length; index++) {
            const element = data.operation[index].operationId;//.name
            a.push(element) ;//`{name: ${element}}`
            
        }

        this.dashboardService.charge(a)
        .then( dashboard => res.json(dashboard))
        .catch( error => this.handleEror(error,res))

    }
    
}