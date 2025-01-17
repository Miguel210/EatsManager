"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCategories = void 0;
class GetCategories {
    constructor(repository) {
        this.repository = repository;
    }
    execute(form) {
        return this.repository.getAll(form);
    }
}
exports.GetCategories = GetCategories;
