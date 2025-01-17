"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class SupplierEntity {
    constructor(id, personId, isActive, person) {
        this.id = id;
        this.personId = personId;
        this.isActive = isActive;
        this.person = person;
    }
    static fromObj(object) {
        const { id, person = ' ', personId, isActive } = object;
        if (!id)
            throw custom_error_1.CustomError.badRequest('Missing id');
        if (!person)
            throw custom_error_1.CustomError.badRequest('Missing  person');
        if (!personId)
            throw custom_error_1.CustomError.badRequest('Missing personId');
        if (isActive === undefined)
            throw custom_error_1.CustomError.badRequest('Not exist isActive in supplierEntity');
        return new SupplierEntity(id, personId, isActive, person);
    }
}
exports.SupplierEntity = SupplierEntity;
