import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { OfferService } from "../services/offer.service";





export class OfferController {

    constructor(
        private readonly service: OfferService
    ) {}

    private HandleError = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }


    create = (req: Request, res: Response) => {

    }

    get = (req: Request, res: Response) => {
        
    }

    getAll = (req: Request, res: Response) => {
        
    }

    update = (req: Request, res: Response) => {
        
    }

    delete = (req: Request, res: Response) => {
        
    }
}