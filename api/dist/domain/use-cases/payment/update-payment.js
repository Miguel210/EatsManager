"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePayment = void 0;
class UpdatePayment {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.update(dto);
    }
}
exports.UpdatePayment = UpdatePayment;
