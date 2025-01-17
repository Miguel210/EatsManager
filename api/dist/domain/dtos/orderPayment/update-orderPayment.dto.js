"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderpaymentDto = void 0;
class UpdateOrderpaymentDto {
    constructor(id, amount, status, isActive) {
        this.id = id;
        this.amount = amount;
        this.status = status;
        this.isActive = isActive;
    }
    static create(props) {
        const { id, amount, status, isActive } = props;
        if (!id)
            return ['movementId is Requerid'];
        if (!amount)
            return ['amount is Requerid'];
        if (!status)
            return ['status is Requerid'];
        if (isActive === undefined)
            return ['isActive is Requerid'];
        return [undefined, new UpdateOrderpaymentDto(id, amount, status, isActive)];
    }
}
exports.UpdateOrderpaymentDto = UpdateOrderpaymentDto;
