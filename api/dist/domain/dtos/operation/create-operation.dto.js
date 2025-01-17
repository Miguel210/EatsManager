"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationDto = void 0;
class OperationDto {
    constructor(id, moduleId, name) { }
    static operation(object) {
        const { id, moduleId, name, isActive } = object;
        if (!id)
            return ['Missing Id operation'];
        if (!moduleId)
            return ['Missing Id moduleId'];
        if (!name)
            return ['Missing Id moduleId'];
        if (isActive === false)
            return ['Isnt active'];
        return [undefined, new OperationDto(id, moduleId, name)];
    }
}
exports.OperationDto = OperationDto;
