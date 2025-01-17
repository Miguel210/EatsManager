"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationRepositoryImpl = void 0;
class EvaluationRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    create(dto) {
        return this.datasource.create(dto);
    }
    getById(id) {
        return this.datasource.getById(id);
    }
    gets(form) {
        return this.datasource.gets(form);
    }
    update(dto) {
        return this.datasource.update(dto);
    }
}
exports.EvaluationRepositoryImpl = EvaluationRepositoryImpl;
