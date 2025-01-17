"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClientOrder = void 0;
class CreateClientOrder {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.create(dto);
    }
}
exports.CreateClientOrder = CreateClientOrder;
