"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteePayment = void 0;
class DeleteePayment {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.delete(id);
    }
}
exports.DeleteePayment = DeleteePayment;
