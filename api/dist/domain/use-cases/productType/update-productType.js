"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductType = void 0;
class UpdateProductType {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.updatebyId(dto);
    }
}
exports.UpdateProductType = UpdateProductType;
