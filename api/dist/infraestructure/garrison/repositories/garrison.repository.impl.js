"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GarrisonRepositoryImpl = void 0;
class GarrisonRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    create(dto) {
        return this.datasource.create(dto);
    }
    getAll(dishId) {
        return this.datasource.getAll(dishId);
    }
    getById(id) {
        return this.datasource.getById(id);
    }
    update(dto) {
        return this.datasource.update(dto);
    }
    delete(id) {
        return this.datasource.delete(id);
    }
}
exports.GarrisonRepositoryImpl = GarrisonRepositoryImpl;
