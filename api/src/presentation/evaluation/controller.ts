import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { EvaluationService } from "../services/evaluation.service";
import { CreateEvaluationDto } from "../../domain/dtos/evaluation/create-evaluation.dto";
import { UpdateEvaluationDto } from "../../domain/dtos/evaluation/update-evaluation.dto";



export class EvaluationController {


    constructor(
        private readonly service: EvaluationService
    ) {}

    private HandleError = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }

    create = (req: Request, res: Response) => {
        
        req.body.evaluatorId =  req.body._meta.userId;   
        req.body.employeeId = req.body.employeeId.id   

        console.log(req.body);
        
        const [ error, dto ] = CreateEvaluationDto.create(req.body);
        // console.log(error);
        // console.log('dto!.employeeId');
        if( error ) throw res.status(400).json({error});

        
        this.service.create( dto! )
        .then( evaluation => res.json(evaluation) )
        .catch( error => this.HandleError(error, res) );
    }

    getById = (req: Request, res: Response) => {
        
        const id = req.body.id;
        if( !id ) throw res.status(400).json({error: `Requerid id` });

        this.service.getById(id)
        .then( evaluation => res.json(evaluation) )
        .catch( error => this.HandleError(error, res) );
    }

    getAll = (req: Request, res: Response) => {
        
       const form = {
        employeeId: req.body.employeeId,
        evaluatorId: req.body.evaluatorId,
        date: req.body.date,
        isActive: req.body.isActive
       }
       
       this.service.getAll(form)
       .then( evaluation => res.json(evaluation) )
       .catch(error => this.HandleError(error, res) )
    }

    update = (req: Request, res: Response) => {

        const [error, dto] = UpdateEvaluationDto.create({...req.body, ...req.body.evaluation});
        if( error ) throw res.status(400).json({error});

        this.service.update(dto!)
        .then( evaluation => res.json(evaluation))
        .catch(error => this.HandleError(error, res))
    }
}