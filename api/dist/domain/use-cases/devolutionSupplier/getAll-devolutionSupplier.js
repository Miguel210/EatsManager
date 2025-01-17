"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllDevolutionSupplier = void 0;
class GetAllDevolutionSupplier {
    constructor(repository) {
        this.repository = repository;
    }
    execute(form) {
        return this.repository.getAll(form);
    }
}
exports.GetAllDevolutionSupplier = GetAllDevolutionSupplier;
