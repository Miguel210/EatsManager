"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGarrisonDto = void 0;
class UpdateGarrisonDto {
    constructor(id, dishId, garrisonId, quantity, identifier, isActive) {
        this.id = id;
        this.dishId = dishId;
        this.garrisonId = garrisonId;
        this.quantity = quantity;
        this.identifier = identifier;
        this.isActive = isActive;
    }
    static create(props) {
        const { id, dishId, garrisonId, quantity, identifier, isActive } = props;
        if (!id)
            return ['id is requerid'];
        if (!dishId)
            return ['DishId is requerid'];
        if (!garrisonId)
            return ['garrisionId is requerid'];
        if (!quantity)
            return ['quantity is requerid'];
        if (!identifier)
            return ['identidier is requerid'];
        if (isActive === undefined)
            return ['isActive is requerid'];
        return [undefined, new UpdateGarrisonDto(id, dishId, garrisonId, quantity, identifier, isActive)];
    }
}
exports.UpdateGarrisonDto = UpdateGarrisonDto;
