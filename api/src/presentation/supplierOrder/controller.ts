import { Request, Response } from "express";
import { SupplierOrderService } from "../services/supplierOrder.service";
import { CustomError } from "../../domain";
import { CreateSupplierOrderDto } from '../../domain/dtos/supplierOrder/create-supplierOrder.dto';



export class SupplierOrderController {

    constructor(
        private readonly service: SupplierOrderService
    ) {}

    private HandleError = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }

    create = (req: Request, res: Response) => {

        const [error, dto] = CreateSupplierOrderDto.create(req.body)
        if( error ) throw res.status(400).json({error});

        this.service.create(dto!)
        .then(order => res.json(order))
        .catch(error => this.HandleError(error, res))
    }

    get = (req: Request, res: Response) => {

        const id = req.body.id;
        if( !id ) throw res.status(400).json({error: 'id is requerid'});

        this.service.get(id)
        .then(order => res.json(order))
        .catch(error => this.HandleError(error, res))
    }

    getAll = (req: Request, res: Response) => {

        const form = {

        }

        this.service.getAll(form)
        .then(order => res.json(order))
        .catch(error => this.HandleError(error, res))
    }

    update = (req: Request, res: Response) => {
        
    }

    delete = (req: Request, res: Response) => {
        
    }
}