import { Response, Request} from 'express'
import { CustomError } from "../../domain";
import { MovementService } from "../services/movement.service";
import { CreateMovementDto } from '../../domain/dtos/movement/create-movement.dto';
import { UpdateMovementDto } from '../../domain/dtos/movement/update-movement.dto';




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

        console.log(req.body

        );
        
        
        const id = req.body.id;
        if( !id ) throw res.json(400).json({error: 'id is requerid'});

        this.service.getById(id)
        .then(movement => res.json(movement))
        .catch(error => this.HandleError(error, res))
    }
    getAll = (req: Request, res: Response) => {
        console.log(req.query);
        
        let date: Date | any;
        date = new Date(req.body.date)
        if( !req.body.date) {
            date = undefined;
        }
        const documentId = req.query.documentId ? [req.query.documentId] : '';
        const form = {
            personId: req.body.personId,
            documentId:  documentId ,
            elaborateId: req.body.elaborateId,
            status: req.body.status,
            isActive: req.body.isActive,
            date: date
        }

        this.service.getAll(form)
        .then(movement => res.json(movement))
        .catch(error => this.HandleError(error, res))
    }
    update = (req: Request, res: Response) => {
       
        const [error, dto ] = UpdateMovementDto.create(req.body)
        if( error ) throw res.json(400).json({error});

        this.service.update(dto!)
        .then(movement => res.json(movement))
        .catch(error => this.HandleError(error, res))

    }
}