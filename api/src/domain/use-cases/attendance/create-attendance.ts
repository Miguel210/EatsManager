import { CreateAttendanceDto } from "../../dtos/attendance/create-attendance.dto";
import { AttendanceEntity } from "../../entities/attendance.entity";
import { AttendanceRepository } from "../../repositories/attendance/attendance.repository";




export interface CreateAttendanceUseCase {
    execute(dto: CreateAttendanceDto): Promise <AttendanceEntity>;
}


export class CreateAttendance implements CreateAttendanceUseCase {

    constructor(
        private readonly repository: AttendanceRepository
    ) {}

    execute(dto: CreateAttendanceDto): Promise<AttendanceEntity> {
        return this.repository.create(dto)
    }
}