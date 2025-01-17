"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAttendance = void 0;
class CreateAttendance {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.create(dto);
    }
}
exports.CreateAttendance = CreateAttendance;
