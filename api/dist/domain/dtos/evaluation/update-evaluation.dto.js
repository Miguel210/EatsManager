"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEvaluationDto = void 0;
class UpdateEvaluationDto {
    constructor(id, punctuality, attitude, quality, efficiency, initiative, hygiene) {
        this.id = id;
        this.punctuality = punctuality;
        this.attitude = attitude;
        this.quality = quality;
        this.efficiency = efficiency;
        this.initiative = initiative;
        this.hygiene = hygiene;
    }
    static create(props) {
        const { id, punctuality, attitude, quality, efficiency, initiative, hygiene } = props;
        if (!id)
            return ['id is requerid'];
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
        return [undefined, new UpdateEvaluationDto(id, punctuality, attitude, quality, efficiency, initiative, hygiene)];
    }
}
exports.UpdateEvaluationDto = UpdateEvaluationDto;
