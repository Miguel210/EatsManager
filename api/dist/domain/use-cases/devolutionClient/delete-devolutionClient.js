"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDevolutionClient = void 0;
class DeleteDevolutionClient {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.delete(id);
    }
}
exports.DeleteDevolutionClient = DeleteDevolutionClient;
