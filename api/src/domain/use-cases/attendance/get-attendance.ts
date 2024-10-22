import { CreateAttendanceDto } from "../../dtos/attendance/create-attendance.dto";
import { AttendanceEntity } from "../../entities/attendance.entity";
import { AttendanceRepository } from "../../repositories/attendance/attendance.repository";




export interface GetAttendanceUseCase {
    execute(id: string): Promise <AttendanceEntity>;
}


export class GetAttendance implements GetAttendanceUseCase {

    constructor(
        private readonly repository: AttendanceRepository
    ) {}

    execute(id: string): Promise<AttendanceEntity> {
        return this.repository.getById(id);
    }
}