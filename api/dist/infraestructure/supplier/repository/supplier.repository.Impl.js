"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierRepositoryImpl = void 0;
class SupplierRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    create(createSupplierDto) {
        return this.datasource.create(createSupplierDto);
    }
    getAll() {
        return this.datasource.getAll();
    }
    findbyId(id) {
        return this.datasource.findbyId(id);
    }
    updateById(updateSupplierDto) {
        return this.datasource.updateById(updateSupplierDto);
    }
    deleteById(id) {
        return this.datasource.deleteById(id);
    }
}
exports.SupplierRepositoryImpl = SupplierRepositoryImpl;
