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
exports.EmployeeDatasourceImpl = void 0;
const config_1 = require("../../../config");
const data_1 = require("../../../data");
const employee_entity_1 = require("../../../domain/entities/employee.entity");
class EmployeeDatasourceImpl {
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield data_1.prisma.employee.create({
                data: {
                    id: config_1.Uuid.uuid(),
                    person: {
                        create: {
                            id: config_1.Uuid.uuid(),
                            genderId: dto.person.genderId,
                            profileId: dto.person.profileId,
                            typePersonId: dto.person.typePersonId,
                            fullname: dto.person.fullname,
                            password: dto.person.password,
                            username: dto.person.username
                        }
                    },
                    hireDate: new Date(),
                    input: new Date(dto.input),
                    output: new Date(dto.output),
                    salary: dto.salary,
                    isActive: dto.isActive
                }
            });
            if (!employee)
                throw `Employee with data ${dto} not found`;
            return employee_entity_1.EmployeeEntity.fromObject(employee);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id);
            const employee = yield data_1.prisma.employee.findFirst({
                where: {
                    id: id,
                    isDelete: false
                },
                select: {
                    id: true,
                    personId: true,
                    isActive: true,
                    person: {
                        select: {
                            fullname: true,
                            genderId: true,
                            typePersonId: true,
                            profileId: true,
                        }
                    },
                    hireDate: true,
                    input: true,
                    output: true,
                    salary: true
                }
            });
            console.log(employee);
            if (!employee)
                throw `Employee with id ${id} not found`;
            return employee_entity_1.EmployeeEntity.fromObject(employee);
        });
    }
    gets(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const employees = yield data_1.prisma.employee.findMany({
                where: {
                    isActive: true,
                    isDelete: false,
                    personId: {
                        in: form.personId || undefined
                    },
                    person: {
                        profileId: {
                            in: form.profileId || undefined
                        }
                    }
                },
                select: {
                    id: true,
                    personId: true,
                    person: {
                        select: {
                            fullname: true,
                            profile: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    },
                    hireDate: true,
                    input: true,
                    output: true,
                    salary: true,
                    isActive: true
                }
            });
            console.log(form);
            if (!employees)
                throw `Employee with data ${form} not founds`;
            return employees.map(employee => employee_entity_1.EmployeeEntity.fromObject(employee));
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('kkkkkkkkkkkkkkk');
            console.log(dto.person);
            console.log('kkkkkkkkkkk');
            const employee = yield data_1.prisma.employee.update({
                where: {
                    id: dto.id
                },
                data: {
                    input: new Date(dto.input),
                    output: new Date(dto.output),
                    salary: dto.salary,
                    isActive: dto.isActive,
                    person: {
                        update: {
                            genderId: dto.person.genderId,
                            profileId: dto.person.profileId,
                            typePersonId: dto.person.typePersonId,
                            fullname: dto.person.fullname
                        }
                    }
                }
            });
            console.log(employee);
            if (!employee)
                throw `Employee with id ${dto.id} not found`;
            return employee_entity_1.EmployeeEntity.fromObject(employee);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getById(id);
            const employee = yield data_1.prisma.employee.update({
                where: {
                    id: id
                },
                data: {
                    isDelete: true,
                    deleteAt: new Date()
                }
            });
            if (!employee)
                throw `Employee with id ${id} not found`;
            return employee_entity_1.EmployeeEntity.fromObject(employee);
        });
    }
}
exports.EmployeeDatasourceImpl = EmployeeDatasourceImpl;
