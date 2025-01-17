"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductDto = void 0;
class CreateProductDto {
    constructor(code, description, existence, price, productTypeId, categoryId, viewMenu, isActive, image) {
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
        const { code, description, existence, price, productTypeId, categoryId, viewMenu = false, isActive = true, image } = props;
        if (!code)
            return ['Code is requerid', undefined];
        if (!description)
            return ['description is requerid', undefined];
        if (existence === undefined)
            return ['existence is requerid', undefined];
        if (price === undefined)
            return ['price is requerid', undefined];
        if (!productTypeId)
            return ['product type is requerid', undefined];
        if (!categoryId)
            return ['category is requerid', undefined];
        if (viewMenu === undefined)
            return ['view Menu is requerid', undefined];
        if (isActive === undefined)
            return ['isActive is requerid', undefined];
        return [undefined, new CreateProductDto(code, description, parseInt(existence), parseInt(price), productTypeId, categoryId, viewMenu, isActive, image)];
    }
}
exports.CreateProductDto = CreateProductDto;
