"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOffer = void 0;
class DeleteOffer {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.delete(id);
    }
}
exports.DeleteOffer = DeleteOffer;
