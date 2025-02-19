"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCategory = void 0;
class GetCategory {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.get(id);
    }
}
exports.GetCategory = GetCategory;
