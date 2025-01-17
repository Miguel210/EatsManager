"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderPayment = void 0;
class DeleteOrderPayment {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.delete(id);
    }
}
exports.DeleteOrderPayment = DeleteOrderPayment;
