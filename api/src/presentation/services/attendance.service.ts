import { CreateAttendanceDto } from "../../domain/dtos/attendance/create-attendance.dto";
import { CreateAttendance } from "../../domain/use-cases/attendance/create-attendance";
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
            data: {
                attendance
            }
        }
    }
}