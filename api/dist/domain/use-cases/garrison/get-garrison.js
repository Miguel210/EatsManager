"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetGarrison = void 0;
class GetGarrison {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.getById(id);
    }
}
exports.GetGarrison = GetGarrison;
