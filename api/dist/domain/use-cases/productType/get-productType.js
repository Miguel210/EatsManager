"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductType = void 0;
class GetProductType {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.findById(id);
    }
}
exports.GetProductType = GetProductType;
