import { Request, Response } from "express";
import { PaymentService } from "../services/payment.service";
import { CustomError } from "../../domain";
import { CreatePaymentDto } from "../../domain/dtos/payment/create-payment.dto";
import { error } from "console";




export class PaymentController {

    constructor(
        private readonly service: PaymentService
    ) {}
    
    private HandleError = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }

    create = (req: Request, res: Response) => {

        const [error, dto] = CreatePaymentDto.create(req.body);
        if( error ) throw res.status(400).json({error});

        this.service.create(dto!)
        .then(payment => res.json(payment))
        .catch(error => this.HandleError(error, res ));
    }
    
    get = (req: Request, res: Response) => {

        const id = req.body.id;
        if( !id ) throw res.status(400).json({error: 'id is reqierid'});
    
        this.service.get(id)
        .then(payment => res.json(payment))
        .catch(error => this.HandleError(error, res ));
    }
    
    getAll = (req: Request, res: Response) => {

    }
    
    update = (req: Request, res: Response) => {

    }
    
    delete = (req: Request, res: Response) => {

    }
    
}