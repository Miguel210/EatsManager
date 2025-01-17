"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmployee = void 0;
class UpdateEmployee {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.update(dto);
    }
}
exports.UpdateEmployee = UpdateEmployee;
