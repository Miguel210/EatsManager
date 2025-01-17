"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePayment = void 0;
class CreatePayment {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.create(dto);
    }
}
exports.CreatePayment = CreatePayment;
