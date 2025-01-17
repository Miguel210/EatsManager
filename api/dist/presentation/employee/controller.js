"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeController = void 0;
const domain_1 = require("../../domain");
const create_employee_dto_1 = require("../../domain/dtos/employee/create-employee.dto");
const update_employee_dto_1 = require("../../domain/dtos/employee/update-employee.dto");
class EmployeeController {
    constructor(service) {
        this.service = service;
        this.HandleError = (error, res) => {
            if (error instanceof (domain_1.CustomError)) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            console.log(`${error}`);
            return res.status(500).json({ error: 'Internal server error' });
        };
        this.create = (req, res) => {
            console.log(req.body.person);
            const [error, dto] = create_employee_dto_1.CreateEmployeeDto.create(Object.assign(Object.assign({}, req.body), req.body.person));
            if (error)
                throw res.status(400).json({ error });
            this.service.create(dto)
                .then(employee => res.json(employee))
                .catch(error => this.HandleError(error, res));
        };
        this.get = (req, res) => {
            const id = req.body.id;
            if (!id)
                throw res.status(400).json({ id });
            this.service.get(id)
                .then(employee => res.json(employee))
                .catch(error => this.HandleError(error, res));
        };
        this.gets = (req, res) => {
            const form = {
                personId: req.body.personId,
                profileId: req.body.profileId,
                isActive: req.body.isActive,
            };
            this.service.gets(form)
                .then(employee => res.json(employee))
                .catch(error => this.HandleError(error, res));
        };
        this.update = (req, res) => {
            const [error, dto] = update_employee_dto_1.UpdateEmployeeDto.create(Object.assign(Object.assign({ id: req.body.id }, req.body.employee), req.body.employee.person));
            if (error)
                res.status(400).json({ error });
            this.service.update(dto)
                .then(employee => res.json(employee))
                .catch(error => this.HandleError(error, res));
        };
        this.delete = (req, res) => {
            const id = req.body.id;
            if (!id)
                throw res.status(400).json({ id });
            this.service.delete(id)
                .then(employee => res.json(employee))
                .catch(error => this.HandleError(error, res));
        };
    }
}
exports.EmployeeController = EmployeeController;
