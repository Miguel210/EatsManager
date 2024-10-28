import { Request, Response } from "express";
import { MovementsDetailService } from "../services/movementDetail.service";




export class MovementDetailController {

    constructor(
        private readonly service: MovementsDetailService
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