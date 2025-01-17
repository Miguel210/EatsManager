"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSupplierOrder = void 0;
class CreateSupplierOrder {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.create(dto);
    }
}
exports.CreateSupplierOrder = CreateSupplierOrder;
