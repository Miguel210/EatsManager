"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSupplier = void 0;
class DeleteSupplier {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.deleteById(id);
    }
}
exports.DeleteSupplier = DeleteSupplier;
