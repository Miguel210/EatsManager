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
                documentId: dto.documentId,
            }
        });

        if( !attendance ) throw `Attendance with data ${dto} not found`;

        return AttendanceEntity.fromObject(attendance);
    }
    async getById(id: string): Promise<AttendanceEntity> {
        
        const attendance = await prisma.attendance.findFirst({
            where: {
                id: id
            },
            select: {
                id: true,
                employee:{
                    select: {
                        id: true,
                        person: {
                            select: {
                                fullname: true
                            }
                        }
                    }
                },
                date: true,
                hour: true,
                documents: {
                    select: {
                        description: true
                    }
                },
                isActive: true
            }
        })

        if( !attendance ) throw `Attendance with id ${id} not found`;

        return AttendanceEntity.fromObject(attendance);
    }
    async gets(form: any): Promise<AttendanceEntity[]> {

        const attendance = await prisma.attendance.findMany({
            where: {
                employeeId:{
                    in: form.employeeId || undefined
                },
                date : form.date || undefined,
                documentId: form.document || undefined
            },
            select: {
                id: true,
                employee:{
                    select: {
                        id: true,
                        person: {
                            select: {
                                fullname: true
                            }
                        }
                    }
                },
                date: true,
                hour: true,
                documents: {
                    select: {
                        id: true,
                        description: true
                    }
                },
                isActive: true
            }
        });

        if( !attendance ) throw `Attendance with data ${form} not found`;

        return attendance.map( attendance => AttendanceEntity.fromObject(attendance));
    }
    async update(dto: UpdateAttendanceDto): Promise<AttendanceEntity> {
        
        const attendance = await prisma.attendance.update({
            where: {
                id: dto.id
            },
            data: {
                employeeId: dto.employeeId,
                documentId: dto.documentId
            }
        })

        if( !attendance ) throw `Attendance with id ${dto.id} not found`;

        return AttendanceEntity.fromObject(attendance);
    }

}