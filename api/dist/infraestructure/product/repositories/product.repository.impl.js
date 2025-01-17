"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepositoryImpl = void 0;
class ProductRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    updateQuantity(form) {
        return this.datasource.updateQuantity(form);
    }
    create(createProductDto) {
        return this.datasource.create(createProductDto);
    }
    getAll(form) {
        return this.datasource.getAll(form);
    }
    findById(id) {
        return this.datasource.findById(id);
    }
    updateById(updateProductDto) {
        return this.datasource.updateById(updateProductDto);
    }
    deleteById(id) {
        return this.datasource.deleteById(id);
    }
}
exports.ProductRepositoryImpl = ProductRepositoryImpl;
