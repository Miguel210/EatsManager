"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOfferDto = void 0;
class CreateOfferDto {
    constructor(productId, price, from, until, isActive) {
        this.productId = productId;
        this.price = price;
        this.from = from;
        this.until = until;
        this.isActive = isActive;
    }
    static fromObject(props) {
        const { productId, price, from, until, isActive } = props;
        if (!productId)
            return ['ProductId is requerid'];
        if (!price)
            return ['Price is requerid'];
        if (from === undefined)
            return ['From (date) is requerid'];
        if (until === undefined)
            return ['Until (date) is requerid'];
        if (isActive === undefined)
            return ['IsActive is requerid'];
        return [undefined, new CreateOfferDto(productId, price, new Date(from), new Date(until), isActive)];
    }
}
exports.CreateOfferDto = CreateOfferDto;
