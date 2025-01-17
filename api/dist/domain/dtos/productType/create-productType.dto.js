"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateproductTypeDto = void 0;
class CreateproductTypeDto {
    constructor(description, isActive, useStock) {
        this.description = description;
        this.isActive = isActive;
        this.useStock = useStock;
    }
    static create(props) {
        const { description, isActive, useStock } = props;
        if (!description)
            return ['Missing description'];
        if (isActive === undefined)
            return ['Missing isActive'];
        if (useStock === undefined)
            return ['Missing useStock'];
        return [undefined, new CreateproductTypeDto(description, isActive, useStock)];
    }
}
exports.CreateproductTypeDto = CreateproductTypeDto;
