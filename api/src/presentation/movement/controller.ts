import { Response, Request} from 'express'
import { CustomError } from "../../domain";
import { MovementService } from "../services/movement.service";




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

    }
    getById = (req: Request, res: Response) => {
        
    }
    getAll = (req: Request, res: Response) => {
        
    }
    update = (req: Request, res: Response) => {
        
    }
}