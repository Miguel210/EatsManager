"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepositoryImpl = void 0;
class CategoryRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    create(createCategoryDto) {
        return this.datasource.create(createCategoryDto);
    }
    getAll(form) {
        return this.datasource.getAll(form);
    }
    get(id) {
        return this.datasource.get(id);
    }
    update(updateCategoryDto) {
        return this.datasource.update(updateCategoryDto);
    }
    delete(id) {
        return this.datasource.delete(id);
    }
}
exports.CategoryRepositoryImpl = CategoryRepositoryImpl;
