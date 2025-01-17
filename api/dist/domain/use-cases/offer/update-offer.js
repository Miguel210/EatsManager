"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOffer = void 0;
class UpdateOffer {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.update(dto);
    }
}
exports.UpdateOffer = UpdateOffer;
