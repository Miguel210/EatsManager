"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class EmployeeEntity {
    constructor(id, person, personId, hireDate, input, output, salary, isActive) {
        this.id = id;
        this.person = person;
        this.personId = personId;
        this.hireDate = hireDate;
        this.input = input;
        this.output = output;
        this.salary = salary;
        this.isActive = isActive;
    }
    static fromObject(object) {
        const { id, person = ' ', personId, hireDate, input, output, salary, isActive } = object;
        console.log(object);
        if (!id)
            throw custom_error_1.CustomError.badRequest('Missing id employee');
        if (!person)
            throw custom_error_1.CustomError.badRequest('Missing person');
        if (!personId)
            throw custom_error_1.CustomError.badRequest('Missing personId');
        if (!hireDate)
            throw custom_error_1.CustomError.badRequest('Missing  hireDate');
        if (!input)
            throw custom_error_1.CustomError.badRequest('Missing input');
        if (!output)
            throw custom_error_1.CustomError.badRequest('Missing output');
        if (!salary)
            throw custom_error_1.CustomError.badRequest('Missing salary');
        if (isActive === undefined)
            throw custom_error_1.CustomError.badRequest('Missing isActive');
        return new EmployeeEntity(id, person, personId, hireDate, input, output, salary, isActive);
    }
}
exports.EmployeeEntity = EmployeeEntity;
