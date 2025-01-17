"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTableCLientOrder = void 0;
class UpdateTableCLientOrder {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.clientOrderDataTable(dto);
    }
}
exports.UpdateTableCLientOrder = UpdateTableCLientOrder;
