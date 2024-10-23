import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { AttendanceService } from "../services/attendance.service";
import { CreateAttendanceDto } from "../../domain/dtos/attendance/create-attendance.dto";



export class AttendanceController {

    constructor(
        private readonly service: AttendanceService
    ) {}

    private handleError = (error: unknown, res: Response) => {
        if(error instanceof(CustomError)) {
            return res.status(error.statusCode).json({error: error.message})
        }
        console.log(`${error}`);
        return res.status(500).json({error: 'Internal server error'})
    }

    create = (req: Request, res: Response) => {
        
        console.log(req.params);
        const [error, dto] = CreateAttendanceDto.create(req.body);
        if( error ) throw res.status(400).json({error});
        
        this.service.create(dto!)
        .then(attendance => res.json(attendance))
        .catch(error => this.handleError(error, res ))
    }

}