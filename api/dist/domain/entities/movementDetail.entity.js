"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovementDetailEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class MovementDetailEntity {
    constructor(id, movementId, quantity, productId, priceUnit, subTotal, tax, total, costUnit, promotionId, isActive) {
        this.id = id;
        this.movementId = movementId;
        this.quantity = quantity;
        this.productId = productId;
        this.priceUnit = priceUnit;
        this.subTotal = subTotal;
        this.tax = tax;
        this.total = total;
        this.costUnit = costUnit;
        this.promotionId = promotionId;
        this.isActive = isActive;
    }
    static fromObject(object) {
        const { id, movementId, movement, quantity, productId, product, priceUnit, subTotal, tax, total, costUnit, promotionId, promotion, isActive } = object;
        if (!id)
            throw custom_error_1.CustomError.badRequest('Missing id');
        if (!movementId && !movement)
            throw custom_error_1.CustomError.badRequest('Missing movementId');
        if (quantity === undefined)
            throw custom_error_1.CustomError.badRequest('Missing quantity');
        if (!productId && !product)
            throw custom_error_1.CustomError.badRequest('Missing productId');
        if (priceUnit === undefined)
            throw custom_error_1.CustomError.badRequest('Missing priceUnit');
        if (subTotal === undefined)
            throw custom_error_1.CustomError.badRequest('Missing subTotal');
        if (tax === undefined)
            throw custom_error_1.CustomError.badRequest('Missing tax');
        if (total === undefined)
            throw custom_error_1.CustomError.badRequest('Missing total');
        if (costUnit === undefined)
            throw custom_error_1.CustomError.badRequest('Missing costUnit');
        // if( !promotionId && promotion ) throw CustomError.badRequest('Missing promotionId');
        if (isActive === undefined)
            throw custom_error_1.CustomError.badRequest('Missing isActive');
        return new MovementDetailEntity(id, movementId || movement, quantity, productId || product, priceUnit, subTotal, tax, total, costUnit, promotionId || promotion, isActive);
    }
}
exports.MovementDetailEntity = MovementDetailEntity;
