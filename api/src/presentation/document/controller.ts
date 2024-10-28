import { Request, Response } from "express";
import { DocumentService } from "../services/document.service";



export class DocumentController {

    constructor(
        readonly service: DocumentService
    ) {}

    create = (req: Request, res: Response) => {

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