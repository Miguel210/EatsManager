"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClientOrderDetail = void 0;
class CreateClientOrderDetail {
    constructor(repository) {
        this.repository = repository;
    }
    execute(dto) {
        return this.repository.create(dto);
    }
}
exports.CreateClientOrderDetail = CreateClientOrderDetail;
