"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEvaluation = void 0;
class CreateEvaluation {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.create(dto);
    }
}
exports.CreateEvaluation = CreateEvaluation;
