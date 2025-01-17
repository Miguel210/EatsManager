"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class InventoryEntity {
    constructor(id, movementId, movement, productId, product, quantity) {
        this.id = id;
        this.movementId = movementId;
        this.movement = movement;
        this.productId = productId;
        this.product = product;
        this.quantity = quantity;
    }
    static fromObject(object) {
        const { id, movementId, productId, product, movement, quantity } = object;
        if (!id)
            throw custom_error_1.CustomError.badRequest('Missig inventory');
        if (!movementId)
            throw custom_error_1.CustomError.badRequest('Missing movementId');
        if (!productId)
            throw custom_error_1.CustomError.badRequest("Missing productId");
        if (!quantity)
            throw custom_error_1.CustomError.badRequest('Missing quantity');
        return new InventoryEntity(id, movementId, movement, productId, product, quantity);
    }
}
exports.InventoryEntity = InventoryEntity;
