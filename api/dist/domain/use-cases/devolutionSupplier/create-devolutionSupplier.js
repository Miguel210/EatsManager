"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDevolutionSupplier = void 0;
class CreateDevolutionSupplier {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.create(dto);
    }
}
exports.CreateDevolutionSupplier = CreateDevolutionSupplier;
