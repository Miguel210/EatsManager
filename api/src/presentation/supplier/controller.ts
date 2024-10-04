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

    dsds = (req: Request, res: Response) => {

        const [error, supplierDto] = CreateSupplierDto.create(req.body)
        if(error) throw res.status(400).json({error});
           
        

        this.supplierService.init(supplierDto!)
        .then( init => res.json(init))
        .catch(error => this.handleError(error,res))
    }
}