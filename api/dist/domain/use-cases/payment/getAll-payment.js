"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllPayment = void 0;
class GetAllPayment {
    constructor(repository) {
        this.repository = repository;
    }
    execute(form) {
        return this.repository.getAll(form);
    }
}
exports.GetAllPayment = GetAllPayment;
