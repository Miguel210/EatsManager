"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinalizateTableCLientOrder = void 0;
class FinalizateTableCLientOrder {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.finalizateclientOrderDataTable(dto);
    }
}
exports.FinalizateTableCLientOrder = FinalizateTableCLientOrder;
