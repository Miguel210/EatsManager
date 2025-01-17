"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDocument = void 0;
class GetDocument {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.get(id);
    }
}
exports.GetDocument = GetDocument;
