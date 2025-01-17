"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMovementDetail = void 0;
class CreateMovementDetail {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.create(dto);
    }
}
exports.CreateMovementDetail = CreateMovementDetail;
