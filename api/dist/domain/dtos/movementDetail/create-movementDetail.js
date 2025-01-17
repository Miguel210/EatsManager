"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMovementDetailDto = void 0;
class CreateMovementDetailDto {
    constructor(movementId, quantity, productId, priceUnit, subTotal, tax, total, costUnit, promotionId, product, isCreatemov) {
        this.movementId = movementId;
        this.quantity = quantity;
        this.productId = productId;
        this.priceUnit = priceUnit;
        this.subTotal = subTotal;
        this.tax = tax;
        this.total = total;
        this.costUnit = costUnit;
        this.promotionId = promotionId;
        this.product = product;
        this.isCreatemov = isCreatemov;
    }
    static create(props) {
        const { movementId, quantity, productId, product, priceUnit, subTotal, tax, total, costUnit, promotionId, isCreatemov = false } = props;
        if (quantity === undefined)
            return ['quantity is required', undefined];
        if (!productId && !product)
            return ['productId is required', undefined];
        if (priceUnit === undefined)
            return ['priceUnit is required', undefined];
        if (subTotal === undefined)
            return ['subtotal is required', undefined];
        if (tax === undefined)
            return ['tax is required', undefined];
        if (total === undefined)
            return ['total is required', undefined];
        if (costUnit === undefined)
            return ['costUnit is required', undefined];
        return [undefined, new CreateMovementDetailDto(movementId, quantity, productId, priceUnit, subTotal, tax, total, costUnit, promotionId, product, isCreatemov)];
    }
}
exports.CreateMovementDetailDto = CreateMovementDetailDto;
