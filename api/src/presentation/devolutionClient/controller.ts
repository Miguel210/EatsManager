import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { DevolutionClientService } from "../services/devolutionClient.service";
import { CreateDevolutionClientDto } from "../../domain/dtos/devolutionClient/create-devolutionClient.dto";



export class DevolutionClientController {

    constructor(
        private readonly service: DevolutionClientService
    ) {}

    private HandleError = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }

    create = (req: Request, res: Response) => {

        const [error, dto ] = CreateDevolutionClientDto.create(req.body);
        if( error ) throw res.status(400).json({error});

        this.service.create(dto!)
        .then(devo => res.json(devo))
        .catch(error => this.HandleError(error, res))
    }

    get = (req: Request, res: Response) => {
        
        const id = req.body.id;
        if( !id ) throw res.status(400).json({error: 'id is requerid'});

        this.service.get(id)
        .then(devo => res.json(devo))
        .catch(error => this.HandleError(error, res))
    }

    getAll = (req: Request, res: Response) => {
        
    }

    update = (req: Request, res: Response) => {
        
    }

    delete = (req: Request, res: Response) => {
        
    }

}