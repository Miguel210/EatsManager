import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { EvaluationService } from "../services/evaluation.service";
import { CreateEvaluationDto } from "../../domain/dtos/evaluation/create-evaluation.dto";



export class EvaluationController {


    constructor(
        private readonly service: EvaluationService
    ) {}

    private handleError = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }

    create = (req: Request, res: Response) => {

        const [ error, dto ] = CreateEvaluationDto.create(req.body);
        if( error ) throw res.status(400).json({error});

        this.service.create( dto! )
        .then( evaluation => res.json(evaluation) )
        .catch( error => this.handleError(error, res) );
    }

    getById = (req: Request, res: Response) => {
        
        const id = req.body.id;
        if( !id ) throw res.status(400).json({error: `Requerid id` });

        this.service.getById(id)
        .then( evaluation => res.json(evaluation) )
        .catch( error => this.handleError(error, res) );
    }

    gets = (req: Request, res: Response) => {
        
    }

    update = (req: Request, res: Response) => {
        
    }
}