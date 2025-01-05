import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { UtilService } from "../services/utils.service";




export class UtilController {

    constructor(
        private readonly utilService: UtilService
    ) {}


    private HandleError = (error: unknown, res: Response) => {
        if( error instanceof(CustomError) ) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }


    autocomplete = (req: Request, res: Response) => {

        const {table, field} = req.params;

        
        
        
        this.utilService.autocomplete(table, field)
        .then(util => res.json(util))
        .catch(error => this.HandleError(error, res))


    }

    productOrder = (req: Request, res: Response) => {

        
        
        this.utilService.productOrder()
        .then(util => res.json(util))
        .catch(error => this.HandleError(error, res))


    }
}