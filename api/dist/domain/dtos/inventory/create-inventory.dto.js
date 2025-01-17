"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInventoryDto = void 0;
class CreateInventoryDto {
    constructor(movementId, product, quantity) {
        this.movementId = movementId;
        this.product = product;
        this.quantity = quantity;
    }
    static create(props) {
        const { movementId, product, quantity } = props;
        if (!movementId)
            return ['Missing movementId'];
        if (!product)
            return ['Missing productId'];
        if (!quantity)
            return ['Missing quantity'];
        return [undefined, new CreateInventoryDto(movementId, product, quantity)];
    }
}
exports.CreateInventoryDto = CreateInventoryDto;
