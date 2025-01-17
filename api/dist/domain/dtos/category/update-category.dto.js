"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoryDto = void 0;
class UpdateCategoryDto {
    constructor(id, categoryName, isActive) {
        this.id = id;
        this.categoryName = categoryName;
        this.isActive = isActive;
    }
    get values() {
        const returnObj = {};
        if (this.id)
            returnObj.id = this.id;
        if (this.isActive)
            returnObj.isActive = this.isActive;
        if (this.categoryName)
            returnObj.categoryName = this.categoryName;
        return returnObj;
    }
    static create(props) {
        const { id, categoryName, isActive } = props;
        if (!id) {
            return ['id is requerid'];
        }
        if (!categoryName) {
            return ['CategoryName is requerid'];
        }
        if (isActive === undefined) {
            return ['isActive is requerid'];
        }
        return [undefined, new UpdateCategoryDto(id, categoryName, isActive)];
    }
}
exports.UpdateCategoryDto = UpdateCategoryDto;
