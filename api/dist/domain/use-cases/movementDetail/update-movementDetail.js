"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMovementDetail = void 0;
class UpdateMovementDetail {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.update(dto);
    }
}
exports.UpdateMovementDetail = UpdateMovementDetail;
