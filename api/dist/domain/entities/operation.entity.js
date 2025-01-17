"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class OperationEntity {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static fromObject(object) {
        const { id, name } = object;
        if (!id)
            throw custom_error_1.CustomError.badRequest('Missing id Operation');
        if (!name)
            throw custom_error_1.CustomError.badRequest('!Missing name Operation');
        return new OperationEntity(id, name);
    }
}
exports.OperationEntity = OperationEntity;
