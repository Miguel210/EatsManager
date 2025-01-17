"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientOrderDetailRepositoryImpl = void 0;
class ClientOrderDetailRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    create(dto) {
        return this.datasource.create(dto);
    }
    get(id) {
        return this.datasource.get(id);
    }
    getAll(form) {
        return this.datasource.getAll(form);
    }
    update(dto) {
        return this.datasource.update(dto);
    }
    delete(id) {
        return this.datasource.delete(id);
    }
}
exports.ClientOrderDetailRepositoryImpl = ClientOrderDetailRepositoryImpl;
