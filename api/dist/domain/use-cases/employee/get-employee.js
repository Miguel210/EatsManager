"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEmployee = void 0;
class GetEmployee {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.getById(id);
    }
}
exports.GetEmployee = GetEmployee;
