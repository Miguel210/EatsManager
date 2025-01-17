"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllMovement = void 0;
class GetAllMovement {
    constructor(repository) {
        this.repository = repository;
    }
    execute(form) {
        return this.repository.getAll(form);
    }
}
exports.GetAllMovement = GetAllMovement;
