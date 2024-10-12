import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { ModuleService } from "../services/module.service";
import { ModulesDto } from "../../domain/dtos/module/create-module.dto";
import { json } from "body-parser";




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

        res.json(req.body)

    }

}