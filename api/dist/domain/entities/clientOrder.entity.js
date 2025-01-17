"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientOrderEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class ClientOrderEntity {
    constructor(id, movementId, invoiceFolio, tableId, paymentDate, status, isActive) {
        this.id = id;
        this.movementId = movementId;
        this.invoiceFolio = invoiceFolio;
        this.tableId = tableId;
        this.paymentDate = paymentDate;
        this.status = status;
        this.isActive = isActive;
    }
    static fromObject(object) {
        const { id, movementId, movement, invoiceFolio, tableId, table, paymentDate, status, isActive } = object;
        if (!id)
            custom_error_1.CustomError.badRequest('Missing id');
        if (!movementId && !movement)
            custom_error_1.CustomError.badRequest('Missing movementId');
        if (!invoiceFolio)
            custom_error_1.CustomError.badRequest('Missing invoiceFolio');
        if (!tableId && table)
            custom_error_1.CustomError.badRequest('Missing tableId');
        if (!paymentDate)
            custom_error_1.CustomError.badRequest('Missing paymentDate');
        if (!status)
            custom_error_1.CustomError.badRequest('Missing status');
        if (isActive === undefined)
            custom_error_1.CustomError.badRequest('Missing isActive');
        return new ClientOrderEntity(id, movementId || movement, invoiceFolio, tableId || table, paymentDate, status, isActive);
    }
}
exports.ClientOrderEntity = ClientOrderEntity;
