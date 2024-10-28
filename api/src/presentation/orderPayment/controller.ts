import { Request, Response } from "express";
import { OrderPaymentService } from "../services/orderPayment.service";




export class OrderPaymentController {


    constructor(
        private readonly serice: OrderPaymentService
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