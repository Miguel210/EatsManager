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
        
        const [error, dto] = CreateAttendanceDto.create(req.body);
        if( error ) throw res.status(400).json({error});
        
        this.service.create(dto!)
        .then(attendance => res.json(attendance))
        .catch(error => this.handleError(error, res ))
    }

    get = (req: Request, res: Response) => {

        const id = req.body.id;
        if( !id ) throw res.status(400).json({error: id});

        this.service.get(id)
        .then( attendance => res.json(attendance))
        .catch(error => this.handleError(error, res));
    }

    gets = (req: Request, res: Response) => {
        let date:any = req.body.date;
        if( date ){
            date = new Date(date);
        }
        const form = {
            employeeId: req.body.employeeId,
            date: date,
            document: req.body.docuemntId
        }

        this.service.gets(form)
            .then(attendance => res.json(attendance))
            .catch(error => this.handleError(error, res))
        ;
    }

}