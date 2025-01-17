"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceDatasouceImpl = void 0;
const config_1 = require("../../../config");
const data_1 = require("../../../data");
const attendance_entity_1 = require("../../../domain/entities/attendance.entity");
class AttendanceDatasouceImpl {
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const attendance = yield data_1.prisma.attendance.create({
                data: {
                    id: config_1.Uuid.uuid(),
                    employeeId: dto.employeeId,
                    date: dto.date,
                    hour: dto.hour,
                    documentId: dto.documentId,
                }
            });
            if (!attendance)
                throw `Attendance with data ${dto} not found`;
            return attendance_entity_1.AttendanceEntity.fromObject(attendance);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const attendance = yield data_1.prisma.attendance.findFirst({
                where: {
                    id: id
                },
                select: {
                    id: true,
                    employee: {
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
            });
            if (!attendance)
                throw `Attendance with id ${id} not found`;
            return attendance_entity_1.AttendanceEntity.fromObject(attendance);
        });
    }
    gets(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const attendance = yield data_1.prisma.attendance.findMany({
                where: {
                    employeeId: {
                        in: form.employeeId || undefined
                    },
                    date: form.date || undefined,
                    documentId: form.document || undefined
                },
                select: {
                    id: true,
                    employee: {
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
            if (!attendance)
                throw `Attendance with data ${form} not found`;
            return attendance.map(attendance => attendance_entity_1.AttendanceEntity.fromObject(attendance));
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const attendance = yield data_1.prisma.attendance.update({
                where: {
                    id: dto.id
                },
                data: {
                    employeeId: dto.employeeId,
                    documentId: dto.documentId
                }
            });
            if (!attendance)
                throw `Attendance with id ${dto.id} not found`;
            return attendance_entity_1.AttendanceEntity.fromObject(attendance);
        });
    }
}
exports.AttendanceDatasouceImpl = AttendanceDatasouceImpl;
