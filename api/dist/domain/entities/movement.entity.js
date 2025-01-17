"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovementEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class MovementEntity {
    constructor(id, personId, documentId, elaborateId, amount, status, isActive, referenceId, date, movementDetail, supplierOrders) {
        this.id = id;
        this.personId = personId;
        this.documentId = documentId;
        this.elaborateId = elaborateId;
        this.amount = amount;
        this.status = status;
        this.isActive = isActive;
        this.referenceId = referenceId;
        this.date = date;
        this.movementDetail = movementDetail;
        this.supplierOrders = supplierOrders;
    }
    static fromObject(object) {
        const { id, personId, person, documentId, document, elaborateId, employees, elaborate, amount, status, isActive, referenceId, reference, date, movementDetail, supplierOrders } = object;
        if (!id)
            throw custom_error_1.CustomError.badRequest('Missing id');
        if (!personId && !person)
            throw custom_error_1.CustomError.badRequest('Missing personId');
        if (!documentId && !document)
            throw custom_error_1.CustomError.badRequest('Missing documentId');
        if (!elaborateId && !employees && undefined)
            throw custom_error_1.CustomError.badRequest('Missing elaborateId');
        if (!amount)
            throw custom_error_1.CustomError.badRequest('Missing amount');
        if (!status)
            throw custom_error_1.CustomError.badRequest('Missing status');
        if (isActive === undefined)
            throw custom_error_1.CustomError.badRequest('Missing isActive');
        if (!referenceId && !reference && undefined)
            throw custom_error_1.CustomError.badRequest('Missing referenceId');
        if (date === undefined)
            throw custom_error_1.CustomError.badRequest('Missing date');
        return new MovementEntity(id, personId || person, documentId || document, elaborateId || employees, amount, status, isActive, referenceId || reference, date, movementDetail, supplierOrders);
    }
}
exports.MovementEntity = MovementEntity;
