"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class ProductEntity {
    constructor(id, code, description, existence, price, productTypeId, categoryId, viewMenu, isActive, image, deleteAt, isDelete) {
        this.id = id;
        this.code = code;
        this.description = description;
        this.existence = existence;
        this.price = price;
        this.productTypeId = productTypeId;
        this.categoryId = categoryId;
        this.viewMenu = viewMenu;
        this.isActive = isActive;
        this.image = image;
        this.deleteAt = deleteAt;
        this.isDelete = isDelete;
    }
    static fromObject(object) {
        const { id, code, description, existence, price, productType, category, productTypeId, categoryId, viewMenu, isActive, image, deleteAt, isDelete } = object;
        if (!id)
            throw custom_error_1.CustomError.badRequest('Missig id product');
        console.log(object);
        if (!code)
            throw custom_error_1.CustomError.badRequest('Missig code');
        if (!description)
            throw custom_error_1.CustomError.badRequest('Missig description');
        if (typeof existence === undefined)
            throw custom_error_1.CustomError.badRequest('Missig existence');
        if (!price)
            throw custom_error_1.CustomError.badRequest('Missig price');
        if (!productType && !productTypeId)
            throw custom_error_1.CustomError.badRequest('Missig productTypeId');
        if (!category && !categoryId)
            throw custom_error_1.CustomError.badRequest('Missig category');
        if (!viewMenu === undefined)
            throw custom_error_1.CustomError.badRequest('Missing viewMenu');
        if (!isActive === undefined)
            throw custom_error_1.CustomError.badRequest('Missing isActive');
        //if(isDelete === false) throw CustomError.badRequest('No exist')
        return new ProductEntity(id, code, description, existence, price, productType || productTypeId, category || categoryId, viewMenu, isActive, image, deleteAt, isDelete);
    }
}
exports.ProductEntity = ProductEntity;
