"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOffer = void 0;
class GetOffer {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.getOfferbyId(id);
    }
}
exports.GetOffer = GetOffer;
