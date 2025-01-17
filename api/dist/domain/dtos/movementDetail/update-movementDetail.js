"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMovementDetailDto = void 0;
class UpdateMovementDetailDto {
    constructor(id, quantity, productId, priceUnit, subTotal, tax, total, costUnit, promotionId, isActive, product) {
        this.id = id;
        this.quantity = quantity;
        this.productId = productId;
        this.priceUnit = priceUnit;
        this.subTotal = subTotal;
        this.tax = tax;
        this.total = total;
        this.costUnit = costUnit;
        this.promotionId = promotionId;
        this.isActive = isActive;
        this.product = product;
    }
    static create(props) {
        const { id, quantity, productId, product, priceUnit, subTotal, tax, total, costUnit, promotionId, isActive = true } = props;
        if (!id)
            return ['id is Requerid'];
        if (isActive === undefined)
            return ['isActive is Requerid'];
        if (!quantity)
            return ['quantity is Requerid'];
        if (!productId)
            return ['productId is Requeride'];
        if (!priceUnit)
            return ['priceUnit is Requerid'];
        if (!subTotal)
            return ['subTotal is Requerid'];
        if (!tax)
            return ['tax is Requerid'];
        if (!total)
            return ['total is Requerid'];
        if (!costUnit)
            return ['costUnit is Requerid'];
        //  if( !promotionId) return ['promotionId is Requerid'];
        return [undefined, new UpdateMovementDetailDto(id, quantity, productId, priceUnit, subTotal, tax, total, costUnit, promotionId, isActive, product)];
    }
}
exports.UpdateMovementDetailDto = UpdateMovementDetailDto;
