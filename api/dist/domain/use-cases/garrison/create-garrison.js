"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGarrison = void 0;
class CreateGarrison {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.create(dto);
    }
}
exports.CreateGarrison = CreateGarrison;
