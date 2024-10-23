import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { EvaluationService } from "../services/evaluation.service";



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

}