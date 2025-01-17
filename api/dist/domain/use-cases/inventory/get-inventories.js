"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllInventory = void 0;
class GetAllInventory {
    constructor(repository) {
        this.repository = repository;
    }
    execute(obj) {
        return this.repository.getAll(obj);
    }
}
exports.GetAllInventory = GetAllInventory;
