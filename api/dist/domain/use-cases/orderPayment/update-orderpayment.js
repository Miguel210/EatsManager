"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderPayment = void 0;
class UpdateOrderPayment {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.update(dto);
    }
}
exports.UpdateOrderPayment = UpdateOrderPayment;
