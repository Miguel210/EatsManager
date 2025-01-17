"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllMovementDetail = void 0;
class GetAllMovementDetail {
    constructor(repository) {
        this.repository = repository;
    }
    execute(form) {
        return this.repository.getAll(form);
    }
}
exports.GetAllMovementDetail = GetAllMovementDetail;
