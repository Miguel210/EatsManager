import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { EmployeeService } from "../services/employee..service";






export class EmployeeController {

    constructor(
        public readonly service: EmployeeService
    ) {}

    private HandleError = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }


}