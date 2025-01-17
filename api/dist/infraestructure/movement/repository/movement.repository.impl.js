"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovementRepositoryImpl = void 0;
class MovementRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    create(dto) {
        return this.datasource.create(dto);
    }
    getById(id) {
        return this.datasource.getById(id);
    }
    getAll(form) {
        return this.datasource.getAll(form);
    }
    update(dto) {
        return this.datasource.update(dto);
    }
}
exports.MovementRepositoryImpl = MovementRepositoryImpl;
