"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class CategoryEntity {
    constructor(id, categoryName, isActive, isDelete, deleteAt) {
        this.id = id;
        this.categoryName = categoryName;
        this.isActive = isActive;
        this.isDelete = isDelete;
        this.deleteAt = deleteAt;
    }
    static fromObject(object) {
        const { id, categoryName, isActive, deleteAt, isDelete } = object;
        if (!id)
            throw custom_error_1.CustomError.badRequest('Missing id Category');
        if (!categoryName)
            throw custom_error_1.CustomError.badRequest("Missing categoryName");
        if (isActive === undefined)
            throw custom_error_1.CustomError.badRequest("Missing isActive");
        if (isDelete === undefined)
            throw custom_error_1.CustomError.badRequest("Missing isDelete");
        return new CategoryEntity(id, categoryName, isActive, deleteAt, isDelete);
    }
}
exports.CategoryEntity = CategoryEntity;
