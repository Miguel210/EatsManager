"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDevolutionClient = void 0;
class UpdateDevolutionClient {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.update(dto);
    }
}
exports.UpdateDevolutionClient = UpdateDevolutionClient;
