"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPayment = void 0;
class GetPayment {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.get(id);
    }
}
exports.GetPayment = GetPayment;
