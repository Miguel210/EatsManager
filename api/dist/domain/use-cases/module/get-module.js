"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetsModule = void 0;
class GetsModule {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.findById(id);
    }
}
exports.GetsModule = GetsModule;
