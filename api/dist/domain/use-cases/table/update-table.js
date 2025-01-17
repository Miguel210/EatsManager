"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTable = void 0;
class UpdateTable {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.update(dto);
    }
}
exports.UpdateTable = UpdateTable;
