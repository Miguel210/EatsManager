"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceController = void 0;
const domain_1 = require("../../domain");
const create_attendance_dto_1 = require("../../domain/dtos/attendance/create-attendance.dto");
const update_attendance_dto_1 = require("../../domain/dtos/attendance/update-attendance.dto");
class AttendanceController {
    constructor(service) {
        this.service = service;
        this.handleError = (error, res) => {
            if (error instanceof (domain_1.CustomError)) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            console.log(`${error}`);
            return res.status(500).json({ error: 'Internal server error' });
        };
        this.create = (req, res) => {
            const [error, dto] = create_attendance_dto_1.CreateAttendanceDto.create(req.body.data);
            if (error)
                throw res.status(400).json({ error });
            this.service.create(dto)
                .then(attendance => res.json(attendance))
                .catch(error => this.handleError(error, res));
        };
        this.get = (req, res) => {
            const id = req.body.id;
            if (!id)
                throw res.status(400).json({ error: id });
            this.service.get(id)
                .then(attendance => res.json(attendance))
                .catch(error => this.handleError(error, res));
        };
        this.gets = (req, res) => {
            let date = req.body.date;
            if (date) {
                date = new Date(date);
            }
            const form = {
                employeeId: req.body.employeeId,
                date: date,
                document: req.body.docuemntId
            };
            this.service.gets(form)
                .then(attendance => res.json(attendance))
                .catch(error => this.handleError(error, res));
        };
        this.update = (req, res) => {
            const [error, dto] = update_attendance_dto_1.UpdateAttendanceDto.create(req.body);
            if (error)
                throw res.status(400).json({ error });
            this.service.update(dto)
                .then(attendance => res.json(attendance))
                .catch(error => this.handleError(error, res));
        };
    }
}
exports.AttendanceController = AttendanceController;
