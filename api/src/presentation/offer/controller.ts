import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { OfferService } from "../services/offer.service";
import { CreateOfferDto } from "../../domain/dtos/offer/create-offer";
import { error } from "console";





export class OfferController {

    constructor(
        private readonly service: OfferService
    ) {}

    private HandleError = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }


    create = (req: Request, res: Response) => {

        const [error, dto ] = CreateOfferDto.fromObject(req.body)
        if( error ) throw res.status(400).json({error});
        
        this.service.create(dto!)
        .then(promotion => res.json(promotion))
        .catch(error => this.HandleError(error, res))
    }

    get = (req: Request, res: Response) => {
        
        const id = req.body.id;
        if( !id ) throw res.status(400).json('Is requerid id');

        this.service.getById(id)
        .then(promotion => res.json(promotion))
        .catch(error => this.HandleError(error, res));
    }

    getAll = (req: Request, res: Response) => {
        
        const form = {
            productId: req.body.id,
            from: req.body.from,
            isActive: req.body.isActive
        }

        this.service.getAll(form)
        .then(promotion => res.json(promotion))
        .catch(error => this.HandleError(error, res) )
    }

    update = (req: Request, res: Response) => {
        
    }

    delete = (req: Request, res: Response) => {
        
    }
}