"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductDto = void 0;
class UpdateProductDto {
    constructor(id, code, description, existence, price, productTypeId, categoryId, viewMenu, isActive, image) {
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
    }
    static create(props) {
        const { id, code, description, existence, price, productTypeId, categoryId, viewMenu, isActive, image } = props;
        if (!id)
            return ['Id must be a valid', undefined];
        if (!code)
            return ['Code is requerid', undefined];
        if (!description)
            return ['description is requerid', undefined];
        if (!existence)
            return ['existence is requerid', undefined];
        if (!price)
            return ['price is requerid', undefined];
        if (!productTypeId)
            return ['product type is requerid', undefined];
        if (!categoryId)
            return ['category is requerid', undefined];
        if (viewMenu === undefined)
            return ['view Menu is requerid', undefined];
        if (isActive === undefined)
            return ['isActive is requerid', undefined];
        return [undefined, new UpdateProductDto(id, code, description, parseInt(existence), parseInt(price), productTypeId, categoryId, viewMenu, isActive, image)];
    }
}
exports.UpdateProductDto = UpdateProductDto;
