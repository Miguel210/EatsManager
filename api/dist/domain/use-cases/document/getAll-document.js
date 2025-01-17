"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllDocument = void 0;
class GetAllDocument {
    constructor(repository) {
        this.repository = repository;
    }
    execute(form) {
        return this.repository.getAll(form);
    }
}
exports.GetAllDocument = GetAllDocument;
