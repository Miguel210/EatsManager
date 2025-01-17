"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAttendance = void 0;
class UpdateAttendance {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.update(dto);
    }
}
exports.UpdateAttendance = UpdateAttendance;
