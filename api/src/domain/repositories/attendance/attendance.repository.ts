import { CreateAttendanceDto } from "../../dtos/attendance/create-attendance.dto";
import { UpdateAttendanceDto } from "../../dtos/attendance/update-attendance.dto";
import { AttendanceEntity } from "../../entities/attendance.entity";



export abstract class AttendanceRepository {

    abstract create(dto: CreateAttendanceDto): Promise<AttendanceEntity>;

    abstract getById(id: string): Promise<AttendanceEntity>;
    abstract gets(form: any): Promise<AttendanceEntity[]>;
    abstract update(dto: UpdateAttendanceDto): Promise<AttendanceEntity>;
}