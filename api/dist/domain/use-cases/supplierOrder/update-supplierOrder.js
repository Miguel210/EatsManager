"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSupplierOrder = void 0;
class UpdateSupplierOrder {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.update(dto);
    }
}
exports.UpdateSupplierOrder = UpdateSupplierOrder;
