"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class OfferEntity {
    constructor(id, productId, price, from, until, isActive) {
        this.id = id;
        this.productId = productId;
        this.price = price;
        this.from = from;
        this.until = until;
        this.isActive = isActive;
    }
    static fromObject(object) {
        const { id, productId, product, price, from, until, isActive } = object;
        if (!id)
            throw custom_error_1.CustomError.badRequest('Missing id offer');
        if (!productId && !product)
            throw custom_error_1.CustomError.badRequest('Missing productId or product');
        if (!price)
            throw custom_error_1.CustomError.badRequest('Missing price');
        if (!from)
            throw custom_error_1.CustomError.badRequest('Missing from (date)');
        if (!until)
            throw custom_error_1.CustomError.badRequest('Missing until (date)');
        if (isActive === undefined)
            throw custom_error_1.CustomError.badRequest('Missing isActive');
        return new OfferEntity(id, productId || product, price, from, until, isActive);
    }
}
exports.OfferEntity = OfferEntity;
