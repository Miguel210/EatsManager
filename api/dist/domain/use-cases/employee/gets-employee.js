"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetsEmployee = void 0;
class GetsEmployee {
    constructor(repository) {
        this.repository = repository;
    }
    execute(form) {
        return this.repository.gets(form);
    }
}
exports.GetsEmployee = GetsEmployee;
