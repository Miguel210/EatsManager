import { Request, Response } from "express";
import { ProductTypeService } from "../services/productType.service";
import { CustomError } from "../../domain";
import { CreateproductTypeDto } from "../../domain/dtos/productType/create-productType.dto";



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

    create = (req: Request, res: Response) => {

        const [error, productTypeDto] = CreateproductTypeDto.create(req.body)
        if( error ) return res.status(400).json({error});

        this.service.create(productTypeDto!)
        .then(type => res.json(type))
        .catch(error => this.handleError(error, res ))
    }   

    getAll = (req: Request, res: Response) => {

        const form = {

        }

        this.service.getAll(form)
        .then(types => res.json(types))
        .catch(error => this.handleError(error, res))

    }

    get = (req: Request, res: Response) => {


        this.service.get(req.body.id)
        .then(type => res.json(type))
        .catch(error => this.handleError(error, res))
    }
}