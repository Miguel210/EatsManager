"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSuppliers = void 0;
class GetSuppliers {
    constructor(repository) {
        this.repository = repository;
    }
    execute() {
        return this.repository.getAll();
    }
}
exports.GetSuppliers = GetSuppliers;
