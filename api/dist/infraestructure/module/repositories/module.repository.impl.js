"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelRepositoryImpl = void 0;
class ModelRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    findById(id) {
        return this.datasource.findById(id);
    }
}
exports.ModelRepositoryImpl = ModelRepositoryImpl;
