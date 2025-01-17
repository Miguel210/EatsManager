"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderPayment = void 0;
class CreateOrderPayment {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.create(dto);
    }
}
exports.CreateOrderPayment = CreateOrderPayment;
