"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllDevolutionClient = void 0;
class GetAllDevolutionClient {
    constructor(repository) {
        this.repository = repository;
    }
    execute(form) {
        return this.repository.getAll(form);
    }
}
exports.GetAllDevolutionClient = GetAllDevolutionClient;
