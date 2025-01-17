"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetsAttendance = void 0;
class GetsAttendance {
    constructor(repository) {
        this.repository = repository;
    }
    execute(form) {
        return this.repository.gets(form);
    }
}
exports.GetsAttendance = GetsAttendance;
