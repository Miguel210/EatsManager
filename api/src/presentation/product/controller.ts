import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { ProductService } from "../services/product.service";




export class ProductController {

    constructor(
        private readonly productService: ProductService
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

        this.productService.getAll()
        .then( product => res.json(product))
        .catch( error => this.handleError(error,res))

    }

}