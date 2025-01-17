"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGarrison = void 0;
class UpdateGarrison {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.update(dto);
    }
}
exports.UpdateGarrison = UpdateGarrison;
