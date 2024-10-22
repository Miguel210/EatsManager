import { CreateAttendanceDto } from "../../dtos/attendance/create-attendance.dto";
import { AttendanceEntity } from "../../entities/attendance.entity";
import { AttendanceRepository } from "../../repositories/attendance/attendance.repository";




export interface GetsAttendanceUseCase {
    execute(form: any): Promise <AttendanceEntity[]>;
}


export class GetsAttendance implements GetsAttendanceUseCase {

    constructor(
        private readonly repository: AttendanceRepository
    ) {}

    execute(form: any): Promise<AttendanceEntity[]> {
        return this.repository.gets(form)
    }
}