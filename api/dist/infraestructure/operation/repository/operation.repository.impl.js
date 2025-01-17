"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationRepositoryImpl = void 0;
class OperationRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    getAllByProfile(id) {
        return this.datasource.getAllByProfile(id);
    }
}
exports.OperationRepositoryImpl = OperationRepositoryImpl;
