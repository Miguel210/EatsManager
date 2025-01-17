"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEvaluationDto = void 0;
class CreateEvaluationDto {
    constructor(employeeId, evaluatorId, punctuality, attitude, quality, efficiency, initiative, hygiene) {
        this.employeeId = employeeId;
        this.evaluatorId = evaluatorId;
        this.punctuality = punctuality;
        this.attitude = attitude;
        this.quality = quality;
        this.efficiency = efficiency;
        this.initiative = initiative;
        this.hygiene = hygiene;
    }
    static create(props) {
        const { employeeId, evaluatorId, punctuality, attitude, quality, efficiency, initiative, hygiene } = props;
        if (employeeId === undefined)
            return ['employeeid is requerid'];
        if (evaluatorId === undefined)
            return ['evaluatorid is requerid'];
        if (punctuality === undefined)
            return ['punctuality is requerid'];
        if (attitude === undefined)
            return ['attitude is requerid'];
        if (quality === undefined)
            return ['quality is requerid'];
        if (efficiency === undefined)
            return ['efficiency is requerid'];
        if (initiative === undefined)
            return ['initiative is requerid'];
        if (hygiene === undefined)
            return ['hygiene is requerid'];
        return [undefined, new CreateEvaluationDto(employeeId, evaluatorId, punctuality, attitude, quality, efficiency, initiative, hygiene)];
    }
}
exports.CreateEvaluationDto = CreateEvaluationDto;
