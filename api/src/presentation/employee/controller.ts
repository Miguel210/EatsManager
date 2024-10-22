import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { EmployeeService } from "../services/employee.service";
import { CreateEmployeeDto } from "../../domain/dtos/employee/create-employee.dto";






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

    create = (req: Request, res: Response) => {


        const [error, dto ] = CreateEmployeeDto.create(req.body);
        if( error ) throw res.status(400).json({error});

        this.service.create(dto!)
        .then(employee => res.json(employee))
        .catch(error => this.HandleError(error, res));
    }

    get = (req: Request, res: Response) => {

        const id = req.body.id;
        if( !id ) throw res.status(400).json({id});

        this.service.get(id)
        .then(employee => res.json(employee))
        .catch(error => this.HandleError(error, res))
    }

}