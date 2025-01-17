"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClientOrderDetail = void 0;
class GetClientOrderDetail {
    constructor(repository) {
        this.repository = repository;
    }
    execure(id) {
        return this.repository.get(id);
    }
}
exports.GetClientOrderDetail = GetClientOrderDetail;
