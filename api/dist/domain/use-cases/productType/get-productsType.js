"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProductType = void 0;
class GetAllProductType {
    constructor(repository) {
        this.repository = repository;
    }
    execute(form) {
        return this.repository.getAll(form);
    }
}
exports.GetAllProductType = GetAllProductType;
