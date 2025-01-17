"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllSupplierOrder = void 0;
class GetAllSupplierOrder {
    constructor(repository) {
        this.repository = repository;
    }
    execute(form) {
        return this.repository.getAll(form);
    }
}
exports.GetAllSupplierOrder = GetAllSupplierOrder;
