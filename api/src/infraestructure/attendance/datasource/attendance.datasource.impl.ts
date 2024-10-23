import { Uuid } from "../../../config";
import { prisma } from "../../../data";
import { AttendanceDatasouce } from "../../../domain/datasource/attendance/attendance.datasource";
import { CreateAttendanceDto } from "../../../domain/dtos/attendance/create-attendance.dto";
import { UpdateAttendanceDto } from "../../../domain/dtos/attendance/update-attendance.dto";
import { AttendanceEntity } from "../../../domain/entities/attendance.entity";





export class AttendanceDatasouceImpl implements AttendanceDatasouce {
    
    async create(dto: CreateAttendanceDto): Promise<AttendanceEntity> {

        const attendance = await prisma.attendance.create({
            data: {
                id: Uuid.uuid(),
                employeeId: dto.employeeId,
                date: new Date(dto.date),
                hour: new Date(dto.hour),
                document: dto.documentId,
            }
        });

        if( !attendance ) throw `Garrison with data ${dto} not found`;

        return AttendanceEntity.fromObject(attendance);
    }
    async getById(id: string): Promise<AttendanceEntity> {
        throw new Error("Method not implemented.");
    }
    async gets(form: any): Promise<AttendanceEntity[]> {
        throw new Error("Method not implemented.");
    }
    async update(dto: UpdateAttendanceDto): Promise<AttendanceEntity> {
        throw new Error("Method not implemented.");
    }

}