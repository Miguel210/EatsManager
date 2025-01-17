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
exports.EmployeeService = void 0;
const domain_1 = require("../../domain");
const create_employee_1 = require("../../domain/use-cases/employee/create-employee");
const delete_employee_1 = require("../../domain/use-cases/employee/delete-employee");
const get_employee_1 = require("../../domain/use-cases/employee/get-employee");
const gets_employee_1 = require("../../domain/use-cases/employee/gets-employee");
const update_employee_1 = require("../../domain/use-cases/employee/update-employee");
class EmployeeService {
    constructor(repository) {
        this.repository = repository;
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield new create_employee_1.CreateEmployee(this.repository).execute(dto)
                .then(employee => employee)
                .catch(error => console.log({ error }));
            console.log(employee);
            return {
                data: {
                    employee
                }
            };
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield new get_employee_1.GetEmployee(this.repository).execute(id)
                .then(employee => employee)
                .catch(error => console.log({ error }));
            if (!employee)
                throw domain_1.CustomError.badRequest('Employee no exist');
            return {
                data: employee
            };
        });
    }
    gets(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield new gets_employee_1.GetsEmployee(this.repository).execute(form)
                .then(employee => employee)
                .catch(error => console.log({ error }));
            if (!employee)
                throw domain_1.CustomError.badRequest('Employees no exists');
            return {
                data: employee
            };
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield new update_employee_1.UpdateEmployee(this.repository).execute(dto)
                .then(employee => employee)
                .catch(error => console.log({ error }));
            console.log(employee);
            return {
                data: {
                    employee
                }
            };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield new delete_employee_1.DeleteEmployee(this.repository).execute(id)
                .then(employee => employee)
                .catch(error => console.log({ error }));
            console.log(employee);
            return {
                data: {
                    employee
                }
            };
        });
    }
}
exports.EmployeeService = EmployeeService;
