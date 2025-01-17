"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDevolutionClient = void 0;
class CreateDevolutionClient {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.create(dto);
    }
}
exports.CreateDevolutionClient = CreateDevolutionClient;
