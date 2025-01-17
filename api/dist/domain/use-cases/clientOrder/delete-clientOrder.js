"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteClientOrder = void 0;
class DeleteClientOrder {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.delete(id);
    }
}
exports.DeleteClientOrder = DeleteClientOrder;
