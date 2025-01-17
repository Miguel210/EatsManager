"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProducts = void 0;
class GetProducts {
    constructor(repository) {
        this.repository = repository;
    }
    execute(form) {
        return this.repository.getAll(form);
    }
}
exports.GetProducts = GetProducts;
