"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetsEvaluation = void 0;
class GetsEvaluation {
    constructor(repository) {
        this.repository = repository;
    }
    execute(form) {
        return this.repository.gets(form);
    }
}
exports.GetsEvaluation = GetsEvaluation;
