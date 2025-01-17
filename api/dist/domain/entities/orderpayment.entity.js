"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderpaymentEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class OrderpaymentEntity {
    constructor(id, movementId, amount, status, isActive) {
        this.id = id;
        this.movementId = movementId;
        this.amount = amount;
        this.status = status;
        this.isActive = isActive;
    }
    static fromObject(object) {
        const { id, movementId, movement, amount, status, isActive } = object;
        if (!id)
            throw custom_error_1.CustomError.badRequest('Misssing id');
        if (!movementId && movement)
            throw custom_error_1.CustomError.badRequest('Misssing movementId');
        if (!amount)
            throw custom_error_1.CustomError.badRequest('Misssing amount');
        if (!status)
            throw custom_error_1.CustomError.badRequest('Misssing status');
        if (isActive === undefined)
            throw custom_error_1.CustomError.badRequest('Misssing isActive');
        return new OrderpaymentEntity(id, movementId || movement, amount, status, isActive);
    }
}
exports.OrderpaymentEntity = OrderpaymentEntity;
