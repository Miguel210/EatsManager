"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryRepositoryImpl = void 0;
class InventoryRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    create(createInventoryDto) {
        return this.datasource.create(createInventoryDto);
    }
    getAll(obj) {
        return this.datasource.getAll(obj);
    }
}
exports.InventoryRepositoryImpl = InventoryRepositoryImpl;
