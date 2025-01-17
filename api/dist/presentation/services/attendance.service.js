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
exports.AttendanceService = void 0;
const create_attendance_1 = require("../../domain/use-cases/attendance/create-attendance");
const update_attendance_1 = require("../../domain/use-cases/attendance/update-attendance");
const get_attendance_1 = require("../../domain/use-cases/attendance/get-attendance");
const gets_attendance_1 = require("../../domain/use-cases/attendance/gets-attendance");
class AttendanceService {
    constructor(repository) {
        this.repository = repository;
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const attendance = yield new create_attendance_1.CreateAttendance(this.repository).execute(dto)
                .then(attendance => attendance)
                .catch(error => console.log({ error }));
            return {
                data: attendance
            };
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const attendance = yield new get_attendance_1.GetAttendance(this.repository).execute(id)
                .then(attendance => attendance)
                .catch(error => console.log({ error }));
            return {
                data: attendance
            };
        });
    }
    gets(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const attendance = yield new gets_attendance_1.GetsAttendance(this.repository).execute(form)
                .then(attendance => attendance)
                .catch(error => console.log({ error }));
            return {
                data: attendance
            };
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const attendance = yield new update_attendance_1.UpdateAttendance(this.repository).execute(dto)
                .then(attendance => attendance)
                .catch(error => console.log({ error }));
            return {
                data: attendance
            };
        });
    }
}
exports.AttendanceService = AttendanceService;
