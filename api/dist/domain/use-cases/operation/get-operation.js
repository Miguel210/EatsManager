"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetsAllByProfile = void 0;
class GetsAllByProfile {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.getAllByProfile(id);
    }
}
exports.GetsAllByProfile = GetsAllByProfile;
