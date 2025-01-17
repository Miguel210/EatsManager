"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAttendanceDto = void 0;
class CreateAttendanceDto {
    constructor(employeeId, date, hour, documentId, isActive) {
        this.employeeId = employeeId;
        this.date = date;
        this.hour = hour;
        this.documentId = documentId;
        this.isActive = isActive;
    }
    static create(props) {
        const { employeeId, date, hour, documentId } = props;
        if (!employeeId)
            return ['Requerid employeeId'];
        if (date === undefined)
            return ['Requerid Date'];
        if (hour === undefined)
            return ['Requerid hour'];
        if (!documentId)
            return ['Requerid documentId'];
        const isActive = true;
        return [undefined, new CreateAttendanceDto(employeeId, date, hour, documentId, isActive)];
    }
}
exports.CreateAttendanceDto = CreateAttendanceDto;
