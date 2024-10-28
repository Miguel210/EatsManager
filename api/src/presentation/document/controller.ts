import { Request, Response } from "express";
import { DocumentService } from "../services/document.service";
import { CustomError } from "../../domain";
import { CreateDocumentDto } from "../../domain/dtos/document/create-document.dto";



export class DocumentController {

    constructor(
        readonly service: DocumentService
    ) {}
    
    private HandleError = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }

    create = (req: Request, res: Response) => {

        const [error, dto] = CreateDocumentDto.create(req.body)
        if( error ) throw res.status(400).json({error});

        this.service.create(dto!)
        .then(doc => res.json(doc))
        .catch(error => this.HandleError(error, res))
    }

    get = (req: Request, res: Response) => {
        
        const id = req.body.id;
        if( !id ) throw res.status(400).json({error: 'id is requerid'});

        this.service.get(id)
        .then(doc => res.json(doc))
        .catch(error => this.HandleError(error, res))
    }

    getAll = (req: Request, res: Response) => {
        
        const form = {
            isActive: req.body.isActive
        }

        this.service.getAll(form)
        .then(doc => res.json(doc))
        .catch(error => this.HandleError(error, res))
    }

    update = (req: Request, res: Response) => {
        
    }

    delete = (req: Request, res: Response) => {
        
    }
}