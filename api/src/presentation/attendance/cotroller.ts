import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { AttendanceService } from "../services/attendance.service";



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

}