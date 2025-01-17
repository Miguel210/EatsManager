"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTypeRouter = void 0;
const express_1 = require("express");
const productType_datasoruce_1 = require("../../infraestructure/productType/datasource/productType.datasoruce");
const productType_repository_1 = require("../../infraestructure/productType/repository/productType.repository");
const productType_service_1 = require("../services/productType.service");
const controller_1 = require("./controller");
class ProductTypeRouter {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasoruceImpl = new productType_datasoruce_1.ProductTypeDatasourceImpl();
        const repository = new productType_repository_1.ProductTypeRepositoryImpl(datasoruceImpl);
        const service = new productType_service_1.ProductTypeService(repository);
        const controller = new controller_1.ProductTypeController(service);
        router.post('/create/', controller.create);
        router.get('/', controller.getAll);
        router.post('/get/', controller.get);
        router.post('/update/', controller.update);
        router.post('/delete/', controller.delete);
        return router;
    }
}
exports.ProductTypeRouter = ProductTypeRouter;
