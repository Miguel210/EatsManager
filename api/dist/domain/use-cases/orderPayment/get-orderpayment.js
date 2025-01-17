"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrderPayment = void 0;
class GetOrderPayment {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.get(id);
    }
}
exports.GetOrderPayment = GetOrderPayment;
