import { Request, Response } from "express";
import { ProductTypeService } from "../services/productType.service";
import { CustomError } from "../../domain";



export class ProductTypeController {

    constructor(
        private readonly service: ProductTypeService
    ) {}

    private handleError = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }

    getAll = (req: Request, res: Response) => {

        const form = {

        }

        this.service.getAll(form)
        .then(types => res.json(types))
        .catch(error => this.handleError(error, res))

    }
}