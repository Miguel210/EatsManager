"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = require("express");
const authMiddlewares_1 = require("../middlewares/authMiddlewares");
const controller_1 = require("./controller");
const product_datasource_impl_1 = require("../../infraestructure/product/datasource/product.datasource.impl");
const product_service_1 = require("../services/product.service");
const product_repository_impl_1 = require("../../infraestructure/product/repositories/product.repository.impl");
class ProductRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const productDatasourceImpl = new product_datasource_impl_1.ProductDatasourceImpl();
        const productRepository = new product_repository_impl_1.ProductRepositoryImpl(productDatasourceImpl);
        const productService = new product_service_1.ProductService(productRepository);
        const controller = new controller_1.ProductController(productService);
        router.get('/', [authMiddlewares_1.AuthMiddlewares.validateJWT], controller.getAllp);
        router.post('/get/', [authMiddlewares_1.AuthMiddlewares.validateJWT], controller.getProduct);
        router.post('/update/', [authMiddlewares_1.AuthMiddlewares.validateJWT], controller.update);
        router.post('/delete/', [authMiddlewares_1.AuthMiddlewares.validateJWT], controller.delete);
        router.post('/create/', [authMiddlewares_1.AuthMiddlewares.validateJWT], controller.createp);
        return router;
    }
}
exports.ProductRoutes = ProductRoutes;
