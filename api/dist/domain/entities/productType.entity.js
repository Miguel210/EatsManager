"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTypeEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class ProductTypeEntity {
    constructor(id, description, isActive, useStock) {
        this.id = id;
        this.description = description;
        this.isActive = isActive;
        this.useStock = useStock;
    }
    static fromObject(object) {
        const { id, description, isActive, useStock } = object;
        if (!id)
            throw custom_error_1.CustomError.badRequest('Missing id producttype');
        if (!description)
            throw custom_error_1.CustomError.badRequest('Missing description');
        if (isActive === undefined)
            throw custom_error_1.CustomError.badRequest('Missing isActive');
        if (useStock === undefined)
            throw custom_error_1.CustomError.badRequest('Missing useStock');
        return new ProductTypeEntity(id, description, isActive, useStock);
    }
}
exports.ProductTypeEntity = ProductTypeEntity;
