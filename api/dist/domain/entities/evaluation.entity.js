"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class EvaluationEntity {
    constructor(id, employeeId, evaluatorId, date, punctuality, attitude, quality, efficiency, initiative, hygiene, isActive, empoyee, evaluator) {
        this.id = id;
        this.employeeId = employeeId;
        this.evaluatorId = evaluatorId;
        this.date = date;
        this.punctuality = punctuality;
        this.attitude = attitude;
        this.quality = quality;
        this.efficiency = efficiency;
        this.initiative = initiative;
        this.hygiene = hygiene;
        this.isActive = isActive;
        this.empoyee = empoyee;
        this.evaluator = evaluator;
    }
    static fromObject(object) {
        const { id, employeeId, empoyee, evaluatorId, evaluator, date, punctuality, attitude, quality, efficiency, initiative, hygiene, isActive } = object;
        console.log(object);
        if (!id)
            throw custom_error_1.CustomError.badRequest('Missing id');
        if (!employeeId && !empoyee)
            throw custom_error_1.CustomError.badRequest('Missing employee');
        if (!evaluatorId && !evaluator)
            throw custom_error_1.CustomError.badRequest('Missing evaluatorId');
        if (date === undefined)
            throw custom_error_1.CustomError.badRequest('Missing date');
        if (punctuality === undefined)
            throw custom_error_1.CustomError.badRequest('Missing punctuality');
        if (attitude === undefined)
            throw custom_error_1.CustomError.badRequest('Missing attitude');
        if (quality === undefined)
            throw custom_error_1.CustomError.badRequest('Missing quality');
        if (efficiency === undefined)
            throw custom_error_1.CustomError.badRequest('Missing efficiency');
        if (initiative === undefined)
            throw custom_error_1.CustomError.badRequest('Missing initiative');
        if (hygiene === undefined)
            throw custom_error_1.CustomError.badRequest('Missing hygiene');
        if (isActive === undefined)
            throw custom_error_1.CustomError.badRequest('Missing isActive');
        return new EvaluationEntity(id, employeeId || empoyee, evaluatorId || evaluator, date, punctuality, attitude, quality, efficiency, initiative, hygiene, isActive, empoyee, evaluator);
    }
}
exports.EvaluationEntity = EvaluationEntity;
