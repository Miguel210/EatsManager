"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSupplier = void 0;
class UpdateSupplier {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.updateById(dto);
    }
}
exports.UpdateSupplier = UpdateSupplier;
