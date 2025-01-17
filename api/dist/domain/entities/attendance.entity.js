"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class AttendanceEntity {
    constructor(id, employeeId, date, hour, documentId, isActive) {
        this.id = id;
        this.employeeId = employeeId;
        this.date = date;
        this.hour = hour;
        this.documentId = documentId;
        this.isActive = isActive;
    }
    static fromObject(object) {
        const { id, employee, employeeId, date, hour, documents, documentId, isActive } = object;
        console.log(object);
        if (!id)
            throw custom_error_1.CustomError.badRequest('Missing id attendance');
        if (!employeeId && !employee)
            throw custom_error_1.CustomError.badRequest('Missing employeeId or employee');
        if (!date)
            throw custom_error_1.CustomError.badRequest('Missing date');
        if (!hour)
            throw custom_error_1.CustomError.badRequest('Missing hour');
        if (!documents && !documentId)
            throw custom_error_1.CustomError.badRequest('Missing documentId or document');
        if (isActive === undefined)
            throw custom_error_1.CustomError.badRequest('Missing isActive');
        return new AttendanceEntity(id, employeeId || employee, date, hour, documents || documentId, isActive);
    }
}
exports.AttendanceEntity = AttendanceEntity;
