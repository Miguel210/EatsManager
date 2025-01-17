"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClientOrder = void 0;
class GetClientOrder {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.get(id);
    }
}
exports.GetClientOrder = GetClientOrder;
