"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateproductTypeDto = void 0;
class UpdateproductTypeDto {
    constructor(id, description, isActive, useStock) {
        this.id = id;
        this.description = description;
        this.isActive = isActive;
        this.useStock = useStock;
    }
    get values() {
        const returnObj = {};
        if (this.description)
            returnObj.description = this.description;
        if (this.isActive)
            returnObj.isActive = this.isActive;
        if (this.useStock)
            returnObj.useStock = this.useStock;
        return returnObj;
    }
    static create(props) {
        const { id, description, isActive, useStock } = props;
        if (!id) {
            return ['id is requerid'];
        }
        if (!description)
            return ['description is requerid'];
        if (isActive === undefined)
            return ['isActive is requerid'];
        if (useStock === undefined)
            return ['useStock is requerid'];
        return [undefined, new UpdateproductTypeDto(id, description, isActive, useStock)];
    }
}
exports.UpdateproductTypeDto = UpdateproductTypeDto;
