"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductType = void 0;
class DeleteProductType {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.deletebyId(id);
    }
}
exports.DeleteProductType = DeleteProductType;
