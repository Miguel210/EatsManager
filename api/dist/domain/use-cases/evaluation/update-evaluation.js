"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEvaluation = void 0;
class UpdateEvaluation {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.update(dto);
    }
}
exports.UpdateEvaluation = UpdateEvaluation;
