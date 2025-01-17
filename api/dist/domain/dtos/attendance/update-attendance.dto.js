"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAttendanceDto = void 0;
class UpdateAttendanceDto {
    constructor(id, employeeId, documentId) {
        this.id = id;
        this.employeeId = employeeId;
        this.documentId = documentId;
    }
    static create(props) {
        const { id, employeeId, documentId } = props;
        if (!id)
            return ['Requerid id'];
        if (!employeeId)
            return ['Requerid employeeId'];
        if (!documentId)
            return ['Requerid documentId'];
        return [undefined, new UpdateAttendanceDto(id, employeeId, documentId)];
    }
}
exports.UpdateAttendanceDto = UpdateAttendanceDto;
