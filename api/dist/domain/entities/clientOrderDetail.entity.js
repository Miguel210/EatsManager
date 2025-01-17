"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientOrderDetailEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class ClientOrderDetailEntity {
    constructor(id, clientOrderId, garrisonId, isActive) {
        this.id = id;
        this.clientOrderId = clientOrderId;
        this.garrisonId = garrisonId;
        this.isActive = isActive;
    }
    static fromObject(object) {
        const { id, clientOrderId, garrisonId, isActive } = object;
        if (!id)
            throw custom_error_1.CustomError.badRequest('Missing id');
        if (!clientOrderId)
            throw custom_error_1.CustomError.badRequest('Missing clientOrderId');
        if (!garrisonId)
            throw custom_error_1.CustomError.badRequest('Missing garrisonId');
        if (isActive === undefined)
            throw custom_error_1.CustomError.badRequest('Missing isActive');
        return new ClientOrderDetailEntity(id, clientOrderId, garrisonId, isActive);
    }
}
exports.ClientOrderDetailEntity = ClientOrderDetailEntity;
