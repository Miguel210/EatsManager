import { Request, Response } from "express";
import { MovementsDetailService } from "../services/movementDetail.service";
import { CustomError } from "../../domain";
import { CreateMovementDetailDto } from '../../domain/dtos/movementDetail/create-movementDetail';
import { error } from "console";




export class MovementDetailController {

    constructor(
        private readonly service: MovementsDetailService
    ) {}

    private HandleError = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }

    create = (req: Request, res: Response) => {

        const [error, dto] = CreateMovementDetailDto.create(req.body);
        if( error ) throw res.status(400).json({error});

        this.service.create(dto!)
        .then(movement => res.json(movement))
        .catch(error => this.HandleError(error, res));
    }

    get = (req: Request, res: Response) => {
        
        const id = req.body.id;
        if( !id ) throw res.status(400).json({error: 'id is requerid'});

        this.service.get(id)
        .then(movement => res.json(movement))
        .catch(error => this.HandleError(error, res));
    }

    getAll = (req: Request, res: Response) => {
        
        const form = {
            isActive: req.body.isActive,
            productId: req.body.productId
        }

        this.service.getAll(form)
        .then(movement => res.json(movement))
        .catch(error => this.HandleError(error, res));
    }

    update = (req: Request, res: Response) => {
        
    }

    delete = (req: Request, res: Response) => {
        
    }
}