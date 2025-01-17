"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class MetricEntity {
    constructor(id, operationId, name, sentence) {
        this.id = id;
        this.operationId = operationId;
        this.name = name;
        this.sentence = sentence;
    }
    static fromObject(object) {
        const { id, operationId, name, sentence, isActive } = object;
        if (!id)
            throw custom_error_1.CustomError.badRequest('Missing id Metric');
        if (!name)
            throw custom_error_1.CustomError.badRequest('Missing name Metric');
        if (!operationId)
            throw custom_error_1.CustomError.badRequest('Missing operationId');
        if (!name)
            throw custom_error_1.CustomError.badRequest('Missing name');
        if (!sentence)
            throw custom_error_1.CustomError.badRequest('Missing sentence');
        if (isActive === false)
            throw custom_error_1.CustomError.badRequest('isent exist');
        return new MetricEntity(id, operationId, name, sentence);
    }
}
exports.MetricEntity = MetricEntity;
