"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategory = void 0;
class CreateCategory {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.create(dto);
    }
}
exports.CreateCategory = CreateCategory;
