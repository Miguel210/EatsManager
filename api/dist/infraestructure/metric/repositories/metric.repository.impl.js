"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricRepositoryImpl = void 0;
class MetricRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    find(id) {
        return this.datasource.find(id);
    }
}
exports.MetricRepositoryImpl = MetricRepositoryImpl;
