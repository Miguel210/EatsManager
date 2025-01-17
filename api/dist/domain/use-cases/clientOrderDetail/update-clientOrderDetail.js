"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClientOrderDetail = void 0;
class UpdateClientOrderDetail {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.update(dto);
    }
}
exports.UpdateClientOrderDetail = UpdateClientOrderDetail;
