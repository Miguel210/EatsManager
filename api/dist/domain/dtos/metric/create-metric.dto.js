"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricDto = void 0;
class MetricDto {
    constructor(operationId) {
        this.operationId = operationId;
    }
    static metric(object) {
        console.log('ds');
        console.log(object);
        console.log('ds');
        const { operationId } = object;
        if (!operationId)
            return ['Missing name MetricDto'];
        return [undefined, new MetricDto(operationId)];
    }
}
exports.MetricDto = MetricDto;
