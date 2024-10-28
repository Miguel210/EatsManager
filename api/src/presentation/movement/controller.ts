import { Response, Request} from 'express'
import { CustomError } from "../../domain";
import { MovementService } from "../services/movement.service";
import { CreateMovementDto } from '../../domain/dtos/movement/create-movement.dto';




export class MovementController {

    constructor(
        private readonly service: MovementService
    ) {}

    private HandleError = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }

    creatre = (req: Request, res: Response) => {

        const [error, dto] = CreateMovementDto.create(req.body)
        if( error ) throw res.status(400).json({error});
    
        this.service.create(dto!)
        .then(movement => res.json(movement))
        .catch(error => this.HandleError(error, res))
    }
    getById = (req: Request, res: Response) => {
        
    }
    getAll = (req: Request, res: Response) => {
        
    }
    update = (req: Request, res: Response) => {
        
    }
}