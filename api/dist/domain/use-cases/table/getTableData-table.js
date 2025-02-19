"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTableData = void 0;
class GetTableData {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.getDataTable(id);
    }
}
exports.GetTableData = GetTableData;
