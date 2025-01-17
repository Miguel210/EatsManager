"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOffers = void 0;
class GetOffers {
    constructor(repository) {
        this.repository = repository;
    }
    execute(form) {
        return this.repository.getOffers(form);
    }
}
exports.GetOffers = GetOffers;
