"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryRouter = void 0;
const express_1 = require("express");
const inventory_datasource_impl_1 = require("../../infraestructure/inventory/datasource/inventory.datasource.impl");
const inventory_repository_impl_1 = require("../../infraestructure/inventory/repositories/inventory.repository.impl");
const inventory_service_1 = require("../services/inventory.service");
const controller_1 = require("./controller");
const authMiddlewares_1 = require("../middlewares/authMiddlewares");
class InventoryRouter {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new inventory_datasource_impl_1.InventoryDatasourceImpl();
        const repository = new inventory_repository_impl_1.InventoryRepositoryImpl(datasource);
        const service = new inventory_service_1.InventoryService(repository);
        const controller = new controller_1.InventoryController(service);
        router.get('/:module', [authMiddlewares_1.AuthMiddlewares.validateJWT], controller.init);
        router.get('/:module/getall', [authMiddlewares_1.AuthMiddlewares.validateJWT], controller.getAll);
        router.post('/:module/create', [authMiddlewares_1.AuthMiddlewares.validateJWT], controller.createInv);
        return router;
    }
}
exports.InventoryRouter = InventoryRouter;
