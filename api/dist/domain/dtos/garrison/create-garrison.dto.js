"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGarrisonDto = void 0;
class CreateGarrisonDto {
    constructor(dishId, garrisonId, quantity, identifier, isActive) {
        this.dishId = dishId;
        this.garrisonId = garrisonId;
        this.quantity = quantity;
        this.identifier = identifier;
        this.isActive = isActive;
    }
    static create(props) {
        const { dishId, garrisonId, quantity, identifier, isActive } = props;
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
        return [undefined, new CreateGarrisonDto(dishId, garrisonId, quantity, identifier, isActive)];
    }
}
exports.CreateGarrisonDto = CreateGarrisonDto;
