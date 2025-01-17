"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllClientOrderDetail = void 0;
class GetAllClientOrderDetail {
    constructor(repository) {
        this.repository = repository;
    }
    execure(form) {
        return this.repository.getAll(form);
    }
}
exports.GetAllClientOrderDetail = GetAllClientOrderDetail;
