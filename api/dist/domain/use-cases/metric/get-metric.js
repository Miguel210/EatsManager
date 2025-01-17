"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMetric = void 0;
class GetMetric {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.find(id);
    }
}
exports.GetMetric = GetMetric;
