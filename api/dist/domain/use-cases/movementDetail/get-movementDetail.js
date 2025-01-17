"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMovementDetail = void 0;
class GetMovementDetail {
    constructor(repository) {
        this.repository = repository;
    }
    execute(id) {
        return this.repository.get(id);
    }
}
exports.GetMovementDetail = GetMovementDetail;
