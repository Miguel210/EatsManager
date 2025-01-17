"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteClientOrderDetail = void 0;
class DeleteClientOrderDetail {
    constructor(repository) {
        this.repository = repository;
    }
    execure(id) {
        return this.repository.delete(id);
    }
}
exports.DeleteClientOrderDetail = DeleteClientOrderDetail;
