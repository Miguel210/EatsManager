"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayTableCLientOrder = void 0;
class PayTableCLientOrder {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.PayclientOrderDataTable(dto);
    }
}
exports.PayTableCLientOrder = PayTableCLientOrder;
