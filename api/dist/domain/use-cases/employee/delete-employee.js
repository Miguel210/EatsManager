"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEmployee = void 0;
class DeleteEmployee {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.delete(id);
    }
}
exports.DeleteEmployee = DeleteEmployee;
