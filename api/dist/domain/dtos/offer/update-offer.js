"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOfferDto = void 0;
class UpdateOfferDto {
    constructor(id, productId, price, from, until, isActive) {
        this.id = id;
        this.productId = productId;
        this.price = price;
        this.from = from;
        this.until = until;
        this.isActive = isActive;
    }
    static fromObject(props) {
        const { id, productId, price, from, until, isActive } = props;
        if (!id)
            return ['Id is requerid'];
        if (!productId)
            return [''];
        if (!price)
            return ['Price is requerid'];
        if (!from)
            return ['From (date) is requerid'];
        if (!until)
            return ['Until (date) is requerid'];
        if (isActive === undefined)
            return ['IsActive is requerid'];
        return [undefined, new UpdateOfferDto(id, productId, price, from, until, isActive)];
    }
}
exports.UpdateOfferDto = UpdateOfferDto;
