import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { ProductService } from "../services/product.service";
import { UpdateProductDto } from "../../domain/dtos/product/update-product.dto";
import { CreateProductDto } from "../../domain/dtos/product/create-product.dto";




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

    createp = (req: Request, res: Response) => {

        const [error, createProductDto] = CreateProductDto.create({...req.body.product})
        if( error )return res.status(400).json({error})

        this.productService.create(createProductDto!)
        .then(product => res.json(product))
        .catch(error => this.handleError(error, res))
    }

    getAllp = (req: Request, res: Response) => {
       
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

        if( !id && id === undefined ) return res.status(400).json( { error: 'id nesesary'} )

        this.productService.get(id!)
        .then( product => res.json(product))
        .catch(error => this.handleError(error, res))


    }


    update = (req: Request, res: Response) => {
        const id = req.body.id;

        if( !id ) return res.status(400).json( { error: 'id nesesary'} )

        const [error, updateProductDto] =  UpdateProductDto.create({...req.body.product,id})
        if( error )return res.status(400).json({error})
        
        this.productService.update(updateProductDto!)
        .then(product => res.json(product))
        .catch(error => this.handleError(error, res))

    }


    delete = (req: Request, res: Response) => {

        const id = req.body.id

        if( !id ) return this.handleError('Not id', res);

        this.productService.delete(id)
        .then(product => res.json(product))
        .catch(error => this.handleError(error, res))
    }

}