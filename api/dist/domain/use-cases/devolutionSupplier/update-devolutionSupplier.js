"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDevolutionSupplier = void 0;
class UpdateDevolutionSupplier {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.update(dto);
    }
}
exports.UpdateDevolutionSupplier = UpdateDevolutionSupplier;
