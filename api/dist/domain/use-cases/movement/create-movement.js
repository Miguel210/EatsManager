"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMovement = void 0;
class CreateMovement {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.create(dto);
    }
}
exports.CreateMovement = CreateMovement;
