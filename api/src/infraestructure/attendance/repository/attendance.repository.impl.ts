import { AttendanceDatasouce } from "../../../domain/datasource/attendance/attendance.datasource";
import { CreateAttendanceDto } from "../../../domain/dtos/attendance/create-attendance.dto";
import { UpdateAttendanceDto } from "../../../domain/dtos/attendance/update-attendance.dto";
import { AttendanceEntity } from "../../../domain/entities/attendance.entity";
import { AttendanceRepository } from "../../../domain/repositories/attendance/attendance.repository";




export class AttendanceRepositoryImpl implements AttendanceRepository {
    
    constructor(
        private readonly datasource: AttendanceDatasouce
    ) {}
    
    create(dto: CreateAttendanceDto): Promise<AttendanceEntity> {
        return this.datasource.create(dto);
    }
    getById(id: string): Promise<AttendanceEntity> {
        return this.datasource.getById(id);
    }
    gets(form: any): Promise<AttendanceEntity[]> {
        return this.datasource.gets(form);
    }
    update(dto: UpdateAttendanceDto): Promise<AttendanceEntity> {
        return this.datasource.update(dto);
    }
   
    
}