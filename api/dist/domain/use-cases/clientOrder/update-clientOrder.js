"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClientOrder = void 0;
class UpdateClientOrder {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.update(dto);
    }
}
exports.UpdateClientOrder = UpdateClientOrder;
