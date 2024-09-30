import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { ModuleService } from "../services/module.service";
import { ModulesDto } from "../../domain/dtos/module/create-module.dto";




export class MenuController {

    constructor(
        private readonly moduleService: ModuleService
    ){}

    private handleError = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }

    menu = (req: Request, res: Response) => {
       // console.log(req.body.met[0]);
        res.send(req.body)
        /*const [error, moduleEntity] = ModulesDto.modules(req.body.user)
        if( error ) throw res.status(400).json({error})

        this.moduleService.modules(moduleEntity!)
        .then( dashboard => res.json(dashboard))
        .catch( error => this.handleError(error,res))*/

    }

}