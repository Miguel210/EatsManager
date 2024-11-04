import { Request, Response } from "express";
<<<<<<< HEAD
import { SupplierOrderService } from "../services/supplierOrder.service";
import { CustomError } from "../../domain";
import { CreateSupplierOrderDto } from '../../domain/dtos/supplierOrder/create-supplierOrder.dto';
import { UpdateSupplierOrderDto } from "../../domain/dtos/supplierOrder/update-supplierOrder.dto";
import { ClientOrderDetailService } from "../services/clientOrderDetail.service";
import { CreateClientOrderDetailDto } from "../../domain/dtos/clientOrderDetail/create-clientOrderDetail.dto";
import { UpdateClientOrderDetailDto } from "../../domain/dtos/clientOrderDetail/update-clientOrderDetail.dto";



export class ClientOrderClientController {
=======
import { CustomError } from "../../domain";
import { ClientOrderDetailService } from "../services/clientOrderDetail.service";



export class ClientOrderDetailController {
>>>>>>> c25ecbc1c71588473fbd7a76c230fd9f91950d65

    constructor(
        private readonly service: ClientOrderDetailService
    ) {}

    private HandleError = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }

    create = (req: Request, res: Response) => {

<<<<<<< HEAD
        const [error, dto] = CreateClientOrderDetailDto.create(req.body)
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

        const [error, dto ] = UpdateClientOrderDetailDto.create(req.body)
        if( error ) throw res.status(400).json({error});

        this.service.update(dto!)
        .then(order => res.json(order))
        .catch(error => this.HandleError(error, res))
    }

    delete = (req: Request, res: Response) => {

        const id = req.body.id;
        if( !id ) throw res.status(400).json({error: 'id is requerid'});

        this.service.delete(id)
        .then(order => res.json(order))
        .catch(error => this.HandleError(error, res))
    }
=======
    }

    get = (req: Request, res: Response) => {
        
    }

    getAll = (req: Request, res: Response) => {
        
    }

    update = (req: Request, res: Response) => {
        
    }

    delete = (req: Request, res: Response) => {
        
    }

>>>>>>> c25ecbc1c71588473fbd7a76c230fd9f91950d65
}