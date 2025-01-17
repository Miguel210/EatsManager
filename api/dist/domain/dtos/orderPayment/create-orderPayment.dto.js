"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderpaymentDto = void 0;
class CreateOrderpaymentDto {
    constructor(movementId, amount, status) {
        this.movementId = movementId;
        this.amount = amount;
        this.status = status;
    }
    static create(props) {
        const { movementId, amount, status } = props;
        if (!movementId)
            return ['movementId is Requerid'];
        if (!amount)
            return ['amount is Requerid'];
        if (!status)
            return ['status is Requerid'];
        return [undefined, new CreateOrderpaymentDto(movementId, amount, status)];
    }
}
exports.CreateOrderpaymentDto = CreateOrderpaymentDto;
