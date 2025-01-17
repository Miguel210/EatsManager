"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class PaymentEntity {
    constructor(id, orderPaymentId, amount, typePaymentId, isActive) {
        this.id = id;
        this.orderPaymentId = orderPaymentId;
        this.amount = amount;
        this.typePaymentId = typePaymentId;
        this.isActive = isActive;
    }
    static fromObject(object) {
        const { id, orderPaymentId, orderpayment, amount, typePaymentId, typePayment, isActive } = object;
        if (!id)
            throw custom_error_1.CustomError.badRequest('Missing id');
        if (!orderPaymentId && !orderpayment)
            throw custom_error_1.CustomError.badRequest('Missing OrderpaymentId');
        if (!amount)
            throw custom_error_1.CustomError.badRequest('Missing amount ');
        if (!typePaymentId && !typePayment)
            throw custom_error_1.CustomError.badRequest('Missing ');
        if (isActive === undefined)
            throw custom_error_1.CustomError.badRequest('Missing isActive');
        return new PaymentEntity(id, orderPaymentId || orderpayment, amount, typePaymentId || typePayment, isActive);
    }
}
exports.PaymentEntity = PaymentEntity;
