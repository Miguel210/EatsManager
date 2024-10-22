import { CreateAttendanceDto } from "../../dtos/attendance/create-attendance.dto";
import { UpdateAttendanceDto } from "../../dtos/attendance/update-attendance.dto";
import { AttendanceEntity } from "../../entities/attendance.entity";
import { AttendanceRepository } from "../../repositories/attendance/attendance.repository";




export interface UpdateAttendanceUseCase {
    execute(dto: UpdateAttendanceDto): Promise <AttendanceEntity>;
}


export class UpdateAttendance implements UpdateAttendanceUseCase {

    constructor(
        private readonly repository: AttendanceRepository
    ) {}

    execute(dto: UpdateAttendanceDto): Promise<AttendanceEntity> {
        return this.repository.create(dto)
    }
}