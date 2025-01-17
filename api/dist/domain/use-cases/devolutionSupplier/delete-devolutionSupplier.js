"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDevolutionSupplier = void 0;
class DeleteDevolutionSupplier {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.delete(id);
    }
}
exports.DeleteDevolutionSupplier = DeleteDevolutionSupplier;
