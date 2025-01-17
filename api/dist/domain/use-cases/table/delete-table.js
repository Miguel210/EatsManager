"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTable = void 0;
class DeleteTable {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.delete(id);
    }
}
exports.DeleteTable = DeleteTable;
