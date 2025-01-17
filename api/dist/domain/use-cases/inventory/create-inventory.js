"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInventory = void 0;
class CreateInventory {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.create(dto);
    }
}
exports.CreateInventory = CreateInventory;
