"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDocument = void 0;
class DeleteDocument {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.delete(id);
    }
}
exports.DeleteDocument = DeleteDocument;
