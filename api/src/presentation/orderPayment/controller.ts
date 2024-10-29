import { Request, Response } from "express";
import { OrderPaymentService } from "../services/orderPayment.service";
import { CustomError } from "../../domain";
import { CreateOrderpaymentDto } from "../../domain/dtos/orderPayment/create-orderPayment.dto";
import { UpdateOrderpaymentDto } from "../../domain/dtos/orderPayment/update-orderPayment.dto";




export class OrderPaymentController {


    constructor(
        private readonly serice: OrderPaymentService
    ) {}

    private HandleError = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }


    create = (req: Request, res: Response) => {

        const [error, dto] = CreateOrderpaymentDto.create(req.body);
        if( error ) throw res.status(400).json({error});

        this.serice.create(dto!)
        .then(order => res.json(order))
        .catch(error => this.HandleError(error, res));
    }

    get = (req: Request, res: Response) => {

        const id = req.body.id;
        if( !id ) throw res.status(400).json({error: 'id is requerid'});

        this.serice.get(id)
        .then(order => res.json(order))
        .catch(error => this.HandleError(error, res));
    }

    getAll = (req: Request, res: Response) => {

        const form = {
            isActive: req.body.isActive
        }
        
        this.serice.getAll(form)
        .then(order => res.json(order))
        .catch(error => this.HandleError(error, res));
    }

    update = (req: Request, res: Response) => {

        const [error, dto ] = UpdateOrderpaymentDto.create(req.body);
        if( error ) throw res.status(400).json({error});

        this.serice.update(dto!)
        .then(order => res.json(order))
        .catch(error => this.HandleError(error, res));
    }

    delete = (req: Request, res: Response) => {

        const id = req.body.id;
        if( !id ) throw res.status(400).json({error: 'id is requerid'})
        this.serice.delete(id)
        .then(order => res.json(order))
        .catch(error => this.HandleError(error, res));
    }
}