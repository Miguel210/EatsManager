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
exports.EvaluationDatasourceImpl = void 0;
const config_1 = require("../../../config");
const data_1 = require("../../../data");
const evaluation_entity_1 = require("../../../domain/entities/evaluation.entity");
const employee_datasource_impl_1 = require("../../employee/datasource/employee.datasource.impl");
class EvaluationDatasourceImpl {
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('[[[[[[[[[[[[[[[');
            const employeeImpl = new employee_datasource_impl_1.EmployeeDatasourceImpl();
            const form = {
                personId: [dto.evaluatorId]
            };
            const evaluatorCheck = yield employeeImpl.gets(form);
            const evaluator = evaluatorCheck[0].id;
            console.log(dto);
            const evaluation = yield data_1.prisma.evaluation.create({
                data: {
                    id: config_1.Uuid.uuid(),
                    employeeId: dto.employeeId,
                    evaluatorId: evaluator,
                    date: new Date(),
                    punctuality: dto.punctuality,
                    attitude: dto.attitude,
                    quality: dto.quality,
                    efficiency: dto.efficiency,
                    initiative: dto.initiative,
                    hygiene: dto.hygiene
                }
            });
            if (!evaluation)
                throw `Evaluation with data ${dto} not found`;
            return evaluation_entity_1.EvaluationEntity.fromObject(evaluation);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const evaluation = yield data_1.prisma.evaluation.findFirst({
                where: {
                    id: id
                },
                select: {
                    id: true,
                    empoyee: {
                        select: {
                            id: true,
                            person: {
                                select: {
                                    fullname: true
                                }
                            }
                        }
                    },
                    evaluator: {
                        select: {
                            id: true,
                            person: {
                                select: {
                                    fullname: true
                                }
                            }
                        }
                    },
                    date: true,
                    punctuality: true,
                    attitude: true,
                    quality: true,
                    efficiency: true,
                    initiative: true,
                    hygiene: true,
                    isActive: true
                }
            });
            if (!evaluation)
                throw `Evaluation with id ${id} not found`;
            return evaluation_entity_1.EvaluationEntity.fromObject(evaluation);
        });
    }
    gets(form) {
        return __awaiter(this, void 0, void 0, function* () {
            let date = form.date;
            if (date) {
                date = new Date(date);
            }
            const evaluation = yield data_1.prisma.evaluation.findMany({
                where: {
                    employeeId: {
                        in: form.employeeId || undefined
                    },
                    evaluatorId: {
                        in: form.evaluatorId || undefined
                    },
                    date: date || undefined,
                    isActive: form.isActive
                },
                select: {
                    id: true,
                    employeeId: true,
                    empoyee: {
                        select: {
                            person: {
                                select: {
                                    fullname: true
                                }
                            }
                        }
                    },
                    date: true,
                    evaluator: {
                        select: {
                            person: {
                                select: {
                                    fullname: true
                                }
                            }
                        }
                    },
                    punctuality: true,
                    attitude: true,
                    quality: true,
                    efficiency: true,
                    initiative: true,
                    hygiene: true,
                    isActive: true
                }
            });
            if (!evaluation)
                throw `Evaluation with form ${form} not found`;
            console.log('***********');
            console.log(evaluation);
            console.log('***********');
            return evaluation.map(evaluation => evaluation_entity_1.EvaluationEntity.fromObject(evaluation));
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getById(dto.id);
            const evaluation = yield data_1.prisma.evaluation.update({
                where: {
                    id: dto.id
                },
                data: {
                    punctuality: dto.punctuality,
                    attitude: dto.attitude,
                    quality: dto.quality,
                    efficiency: dto.efficiency,
                    initiative: dto.initiative,
                    hygiene: dto.hygiene
                }
            });
            if (!evaluation)
                throw `Evaluation with id ${dto.id} not found`;
            return evaluation_entity_1.EvaluationEntity.fromObject(evaluation);
        });
    }
}
exports.EvaluationDatasourceImpl = EvaluationDatasourceImpl;
