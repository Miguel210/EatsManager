import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { DevolutionSupplierService } from "../services/devulutionSupplier.service";
import { CreateDevolutionSupplierDto } from "../../domain/dtos/devolutionSupplier/create-devolutionSupplier.dto";
import { error } from "console";
import { UpdateDevolutionSupplierDto } from "../../domain/dtos/devolutionSupplier/update-devolutionSupplier.dto";



export class DevolutionSupplierController {

    constructor(
        private readonly service: DevolutionSupplierService
    ) {}

    private HandleError = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }

    create = (req: Request, res: Response) => {

        const [error, dto] = CreateDevolutionSupplierDto.create(req.body);
        if( error ) throw res.status(400).json({error});

        this.service.create(dto!)
        .then(devolution => res.json(devolution))
        .catch(error => this.HandleError(error, res))
    }

    get = (req: Request, res: Response) => {
        
        const id = req.body.id;
        if( !id ) throw res.status(400).json({error: 'id is requerid'});

        this.service.get(id)
        .then(devolution => res.json(devolution))
        .catch(error => this.HandleError(error, res))
    }

    getAll = (req: Request, res: Response) => {
        
        const form = {

        }

        this.service.getAll(form)
        .then(devolution => res.json(devolution))
        .catch(error => this.HandleError(error, res))
    }

    update = (req: Request, res: Response) => {
        
        const [error, dto] = UpdateDevolutionSupplierDto.create(req.body);
        if( error ) throw res.status(400).json({error});

        this.service.update(dto!)
        .then(devolution => res.json(devolution))
        .catch(error => this.HandleError(error, res))
    }

    delete = (req: Request, res: Response) => {
        
        const id = req.body.id;
        if( !id ) throw res.status(400).json({error: 'id is requerid'});

        this.service.delete(id)
        .then(devolution => res.json(devolution))
        .catch(error => this.HandleError(error, res))
    }

}