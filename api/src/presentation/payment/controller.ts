import { Request, Response } from "express";
import { PaymentService } from "../services/payment.service";




export class PaymentController {

    constructor(
        private readonly service: PaymentService
    ) {}

    create = (req: Request, res: Response) => {

    }
    
    get = (req: Request, res: Response) => {

    }
    
    getAll = (req: Request, res: Response) => {

    }
    
    update = (req: Request, res: Response) => {

    }
    
    delete = (req: Request, res: Response) => {

    }
    
}