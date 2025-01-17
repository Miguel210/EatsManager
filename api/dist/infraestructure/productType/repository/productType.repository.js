"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTypeRepositoryImpl = void 0;
class ProductTypeRepositoryImpl {
    constructor(datasoruce) {
        this.datasoruce = datasoruce;
    }
    create(dto) {
        return this.datasoruce.create(dto);
    }
    getAll(form) {
        return this.datasoruce.getAll(form);
    }
    findById(id) {
        return this.datasoruce.findById(id);
    }
    updatebyId(dto) {
        return this.datasoruce.updatebyId(dto);
    }
    deletebyId(id) {
        return this.datasoruce.deletebyId(id);
    }
}
exports.ProductTypeRepositoryImpl = ProductTypeRepositoryImpl;
