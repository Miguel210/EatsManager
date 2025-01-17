"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSupplier = void 0;
class CreateSupplier {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.create(dto);
    }
}
exports.CreateSupplier = CreateSupplier;
