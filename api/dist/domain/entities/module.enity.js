"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class ModuleEntity {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static fromObject(object) {
        const { id, name } = object;
        if (!id) {
            throw custom_error_1.CustomError.badRequest('Missing id Module');
        }
        if (!name)
            throw custom_error_1.CustomError.badRequest('!Missing name Module');
        return new ModuleEntity(id, name);
    }
}
exports.ModuleEntity = ModuleEntity;
