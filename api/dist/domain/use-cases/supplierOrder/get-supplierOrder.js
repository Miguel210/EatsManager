"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSupplierOrder = void 0;
class GetSupplierOrder {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.get(id);
    }
}
exports.GetSupplierOrder = GetSupplierOrder;
