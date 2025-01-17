"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryDto = void 0;
class CreateCategoryDto {
    constructor(categoryName, isActive) {
        this.categoryName = categoryName;
        this.isActive = isActive;
    }
    static create(props) {
        const { categoryName, isActive } = props;
        if (!categoryName)
            return ['Missing categoryName'];
        if (isActive === undefined)
            return ['Missing isActive'];
        return [undefined, new CreateCategoryDto(categoryName, isActive)];
    }
}
exports.CreateCategoryDto = CreateCategoryDto;
