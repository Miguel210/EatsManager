"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllOrderPayment = void 0;
class GetAllOrderPayment {
    constructor(repository) {
        this.repository = repository;
    }
    execute(form) {
        return this.repository.getAll(form);
    }
}
exports.GetAllOrderPayment = GetAllOrderPayment;
