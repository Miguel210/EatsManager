"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRouter = void 0;
const express_1 = require("express");
const category_datasoruce_impl_1 = require("../../infraestructure/category/datasoruce/category.datasoruce.impl");
const category_datasource_impl_1 = require("../../infraestructure/category/repositories/category.datasource.impl");
const category_service_1 = require("../services/category.service");
const controller_1 = require("./controller");
class CategoryRouter {
    static get routes() {
        const router = (0, express_1.Router)();
        const categoryDatasourceImpl = new category_datasoruce_impl_1.CategoryDatasourceImpl();
        const categoryRepository = new category_datasource_impl_1.CategoryRepositoryImpl(categoryDatasourceImpl);
        const service = new category_service_1.CategoryService(categoryRepository);
        const controller = new controller_1.CategoryController(service);
        router.get('/', controller.getAllc);
        router.post('/get/', controller.getCategory);
        router.post('/create/', controller.create);
        router.post('/update/', controller.update);
        router.post('/delete/', controller.delete);
        return router;
    }
}
exports.CategoryRouter = CategoryRouter;
