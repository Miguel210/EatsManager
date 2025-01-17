"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAuth = void 0;
class GetAuth {
    constructor(repository) {
        this.repository = repository;
    }
    execute(username) {
        return this.repository.findByUsername(username);
    }
}
exports.GetAuth = GetAuth;
