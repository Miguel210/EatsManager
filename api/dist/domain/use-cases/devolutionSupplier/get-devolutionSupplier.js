"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDevolutionSupplier = void 0;
class GetDevolutionSupplier {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.get(id);
    }
}
exports.GetDevolutionSupplier = GetDevolutionSupplier;
