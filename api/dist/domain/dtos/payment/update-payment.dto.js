"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePaymentDto = void 0;
class UpdatePaymentDto {
    constructor(id, amount, typePaymentId, isActive) {
        this.id = id;
        this.amount = amount;
        this.typePaymentId = typePaymentId;
        this.isActive = isActive;
    }
    static create(props) {
        const { id, amount, typePaymentId, isActive } = props;
        if (!id)
            return ['id is Requerid'];
        if (!amount)
            return ['amount is Requerid'];
        if (!typePaymentId)
            return ['typePaymentId is Requerid'];
        if (isActive === undefined)
            return ['isActive is Requerid'];
        return [undefined, new UpdatePaymentDto(id, amount, typePaymentId, isActive)];
    }
}
exports.UpdatePaymentDto = UpdatePaymentDto;
