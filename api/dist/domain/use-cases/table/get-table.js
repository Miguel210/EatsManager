"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTable = void 0;
class GetTable {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.get(id);
    }
}
exports.GetTable = GetTable;
