import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { SupplierService } from "../services/supplier.service";




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

        
        
    }
}