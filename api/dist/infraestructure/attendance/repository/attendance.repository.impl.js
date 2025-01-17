"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceRepositoryImpl = void 0;
class AttendanceRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    create(dto) {
        return this.datasource.create(dto);
    }
    getById(id) {
        return this.datasource.getById(id);
    }
    gets(form) {
        return this.datasource.gets(form);
    }
    update(dto) {
        return this.datasource.update(dto);
    }
}
exports.AttendanceRepositoryImpl = AttendanceRepositoryImpl;
