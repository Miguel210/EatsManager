"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDocument = void 0;
class CreateDocument {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.create(dto);
    }
}
exports.CreateDocument = CreateDocument;
