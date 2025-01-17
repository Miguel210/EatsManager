"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllTable = void 0;
class GetAllTable {
    constructor(repository) {
        this.repository = repository;
    }
    execute(form) {
        return this.repository.getAll(form);
    }
}
exports.GetAllTable = GetAllTable;
