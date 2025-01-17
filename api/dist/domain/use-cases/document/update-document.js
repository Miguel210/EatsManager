"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDocument = void 0;
class UpdateDocument {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.update(dto);
    }
}
exports.UpdateDocument = UpdateDocument;
