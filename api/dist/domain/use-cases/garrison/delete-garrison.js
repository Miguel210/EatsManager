"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteGarrison = void 0;
class DeleteGarrison {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.delete(id);
    }
}
exports.DeleteGarrison = DeleteGarrison;
