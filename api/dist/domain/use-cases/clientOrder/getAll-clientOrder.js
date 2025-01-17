"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllClientOrder = void 0;
class GetAllClientOrder {
    constructor(repository) {
        this.repository = repository;
    }
    execute(form) {
        return this.repository.getAll(form);
    }
}
exports.GetAllClientOrder = GetAllClientOrder;
