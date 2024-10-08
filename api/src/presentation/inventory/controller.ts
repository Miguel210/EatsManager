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

    getAll = (req: Request, res: Response) => {

        this.inventoryService.getAll()
        .then(inventory => res.json(inventory))
        .catch(error => this.HandleError(error, res))
    }


    createInv = (req: Request, res: Response) => {

        const [error, inventoryDto] = CreateInventoryDto.create(req.body)
        if ( error ) throw res.status(400).json({error})

            console.log(inventoryDto);
            res.json(inventoryDto)       
/*  r
        this.inventoryService.create(inventoryDto!)
        .then( init => res.json(init))
        .catch(error => this.HandleError(error,res))*/
    }

}