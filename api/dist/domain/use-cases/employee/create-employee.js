"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmployee = void 0;
class CreateEmployee {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.create(dto);
    }
}
exports.CreateEmployee = CreateEmployee;
