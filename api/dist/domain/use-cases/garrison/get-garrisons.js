"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetGarrisons = void 0;
class GetGarrisons {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dishId) {
        return this.repository.getAll(dishId);
    }
}
exports.GetGarrisons = GetGarrisons;
