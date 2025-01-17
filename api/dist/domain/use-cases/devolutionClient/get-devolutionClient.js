"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDevolutionClient = void 0;
class GetDevolutionClient {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.get(id);
    }
}
exports.GetDevolutionClient = GetDevolutionClient;
