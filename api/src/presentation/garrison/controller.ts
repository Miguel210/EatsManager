import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { GarrisonService } from "../services/garrison.service";
import { CreateGarrisonDto } from "../../domain/dtos/garrison/create-garrison.dto";
import { UpdateGarrisonDto } from "../../domain/dtos/garrison/update-garrison.dto";



export class GarrisonController {

    constructor(
        private readonly service: GarrisonService
    ) {}

    private handleError = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }

    
    create = (req: Request, res: Response) => {

        const [error, createGarrisonDto] = CreateGarrisonDto.create(req.body)
        if ( error ) throw res.status(400).json({error});

        this.service.create(createGarrisonDto!)
        .then(garrison => res.json(garrison))
        .catch(error => this.handleError(error, res));
    }

    get = (req: Request, res: Response) => {
        
        const id = req.body.id;
        if( !id ) throw res.status(400).json('Requerid id');

        this.service.get(id)
        .then(garrison => res.json(garrison))
        .catch(error => this.handleError(error, res));
    }

    getAll = (req: Request, res: Response) => {
        const dishId = req.body.dishId
        if( !dishId ) throw res.status(400).json('Requerid dishId');

        this.service.getAll(dishId)
        .then(garrison => res.json(garrison))
        .catch(error => this.handleError(error, res));
    }

    update = (req: Request, res: Response) => {

        const [error, updateGarrisonDto] = UpdateGarrisonDto.create(req.body)
        if( error ) throw res.status(400).json({error});

        this.service.update(updateGarrisonDto!)
        .then(garrison => res.json(garrison))
        .catch(error => this.handleError(error, res));
    }

    delete = (req: Request, res: Response) => {

        const id = req.body.id
        if( !id ) throw res.status(400).json('Requerid id');

        this.service.delete(id)
        .then(garrison => res.json(garrison))
        .catch(error => this.handleError(error, res));
    }
}