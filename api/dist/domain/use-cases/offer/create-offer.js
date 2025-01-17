"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOffer = void 0;
class CreateOffer {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.create(dto);
    }
}
exports.CreateOffer = CreateOffer;
