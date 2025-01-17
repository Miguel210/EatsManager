"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableRepositoryImpl = void 0;
class TableRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    PayclientOrderDataTable(dto) {
        return this.datasource.PayclientOrderDataTable(dto);
    }
    finalizateclientOrderDataTable(dto) {
        return this.datasource.finalizateclientOrderDataTable(dto);
    }
    clientOrderDataTable(dto) {
        return this.datasource.clientOrderDataTable(dto);
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
    getDataTable(id) {
        return this.datasource.getDataTable(id);
    }
}
exports.TableRepositoryImpl = TableRepositoryImpl;
