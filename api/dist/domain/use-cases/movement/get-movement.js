"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMovement = void 0;
class GetMovement {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.getById(id);
    }
}
exports.GetMovement = GetMovement;
