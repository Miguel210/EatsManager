import { Request, Response } from "express";
import { InventoryService } from "../services/inventory.service";
import { CustomError } from "../../domain/errors/custom.error";
import { CreateInventoryDto } from "../../domain/dtos/inventory/create-inventory.dto";



export class InventoryController {

    constructor(
        private readonly inventoryService: InventoryService
    ) {}

    private HandleError = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }

    init = (req: Request, res: Response ) => {


        this.inventoryService.init()
        .then( init => res.json(init))
        .catch( error => this.HandleError(error, res))
    }

    getAll = (req: Request, res: Response) => {
        let date: Date | any;
        date = new Date(req.body.date)
        if( !req.body.date) {
            date = undefined;
        }
        
         const data:object = {
            description: req.body.description,
            code: req.body.code,
            productType: req.body.productType ,
            category: req.body.category,
            date: date ,
            isActive: req.body.isActive
         }

        this.inventoryService.getAll(data)
        .then(inventory => res.json(inventory))
        .catch(error => this.HandleError(error, res))
    }


    createInv = (req: Request, res: Response) => {

        const [error, inventoryDto]= CreateInventoryDto.create(req.body)
        if ( error ) throw res.status(400).json({error});

            //console.log(inventoryDto);
            //res.json(inventoryDto)

        this.inventoryService.create(inventoryDto!)
        .then(inv => res.json(inv))
        .catch(error => this.HandleError(error, res))
    }

}