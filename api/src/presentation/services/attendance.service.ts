import { CreateAttendanceDto } from "../../domain/dtos/attendance/create-attendance.dto";
import { UpdateAttendanceDto } from "../../domain/dtos/attendance/update-attendance.dto";
import { CreateAttendance } from "../../domain/use-cases/attendance/create-attendance";
import { UpdateAttendance } from "../../domain/use-cases/attendance/update-attendance";
import { GetAttendance } from "../../domain/use-cases/attendance/get-attendance";
import { GetsAttendance } from "../../domain/use-cases/attendance/gets-attendance";
import { AttendanceRepositoryImpl } from "../../infraestructure/attendance/repository/attendance.repository.impl";



export class AttendanceService {


    constructor(
        readonly repository: AttendanceRepositoryImpl
    ) {}

    async create(dto: CreateAttendanceDto) {
        
        const attendance = await new CreateAttendance( this.repository ).execute(dto)
            .then(attendance => attendance)
            .catch(error =>console.log({error})
        );

        return {
            data: 
                attendance
            
        }
    }

    async get(id: string) {
        
        const attendance = await new GetAttendance( this.repository ).execute(id)
            .then(attendance => attendance)
            .catch(error =>console.log({error})
        );

        return {
            data: 
                attendance
            
        }
    }

    async gets(form: any) {
        
        const attendance = await new GetsAttendance( this.repository ).execute(form)
            .then(attendance => attendance)
            .catch(error =>console.log({error})
        );

        return {
            data: 
                attendance
            
        }
    }

    async update(dto: UpdateAttendanceDto) {
        
        const attendance = await new UpdateAttendance( this.repository ).execute(dto)
            .then(attendance => attendance)
            .catch(error =>console.log({error})
        );

        return {
            data: 
                attendance
            
        }
    }
}