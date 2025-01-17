"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductType = void 0;
class CreateProductType {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.create(dto);
    }
}
exports.CreateProductType = CreateProductType;
