import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { SupplierService } from "../services/supplier.service";
import { CreateSupplierDto } from "../../domain/dtos/supplier/create-supplier.dto";




export class SupplierController {

    constructor(
        private readonly supplierService: SupplierService
    ) {}



    private handleError = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }

    init = (req: Request, res: Response ) => {
        
    }

    create = (req: Request, res: Response) => {

        const [error, supplierDto] = CreateSupplierDto.create(req.body)
        if(error) throw res.status(400).json({error});
           
        

        this.supplierService.createSupplier(supplierDto!)
        .then( init => res.json(init))
        .catch(error => this.handleError(error,res))
    }


    getAll = (req: Request, res: Response) => {

        this.supplierService.getAll()
        .then(supplier => res.json(supplier))
        .catch(error => this.handleError(error,res))

    }

    getSupplier = (req: Request, res: Response) => {

        const id = req.body.id
        console.log(id);
        

        if( !id ) throw res.status(400).json('Error Id')

        this.supplierService.getSupplier(id)
        .then( supplier => res.json(supplier))
        .catch(error => this.handleError(error, res))
    }
}