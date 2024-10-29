import { Request, Response } from "express";
import { MovementsDetailService } from "../services/movementDetail.service";
import { CustomError } from "../../domain";
import { CreateMovementDetailDto } from '../../domain/dtos/movementDetail/create-movementDetail';




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
        
    }

    getAll = (req: Request, res: Response) => {
        
    }

    update = (req: Request, res: Response) => {
        
    }

    delete = (req: Request, res: Response) => {
        
    }
}