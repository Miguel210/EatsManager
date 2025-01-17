"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAttendance = void 0;
class GetAttendance {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.getById(id);
    }
}
exports.GetAttendance = GetAttendance;
