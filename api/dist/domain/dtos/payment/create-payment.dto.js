"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentDto = void 0;
class CreatePaymentDto {
    constructor(orderpaymentId, amount, typePaymentId) {
        this.orderpaymentId = orderpaymentId;
        this.amount = amount;
        this.typePaymentId = typePaymentId;
    }
    static create(props) {
        const { orderpaymentId, amount, typePaymentId } = props;
        if (!orderpaymentId)
            return ['orderpaymentId is Requerid'];
        if (!amount)
            return ['amount is Requerid'];
        if (!typePaymentId)
            return ['typePaymentId is Requerid'];
        return [undefined, new CreatePaymentDto(orderpaymentId, amount, typePaymentId)];
    }
}
exports.CreatePaymentDto = CreatePaymentDto;
