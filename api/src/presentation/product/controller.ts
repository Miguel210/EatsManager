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
       
        const form = {
            description: req.body.description,
            code: req.body.code,
            productType: req.body.productType ,
            category: req.body.category,
            isActive: req.body.isActive,
            viewMenu: req.body.viewMenu
        }

        this.productService.getAll(form)
        .then( product => res.json(product))
        .catch( error => this.handleError(error,res))

    }

    getProduct = (req: Request, res: Response) => {

        const { id } = req.body

        console.log(id);
        

        if( !id ) this.handleError('No Id',res);

        this.productService.get(id)
        .then( product => res.json(product))
        .catch(error => this.handleError(error, res))


    }

}