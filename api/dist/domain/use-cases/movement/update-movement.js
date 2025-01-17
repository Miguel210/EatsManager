"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMovement = void 0;
class UpdateMovement {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.update(dto);
    }
}
exports.UpdateMovement = UpdateMovement;
