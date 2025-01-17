"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierRouter = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const supplier_service_1 = require("../services/supplier.service");
const supplier_repository_Impl_1 = require("../../infraestructure/supplier/repository/supplier.repository.Impl");
const supplier_datasource_Impl_1 = require("../../infraestructure/supplier/datasource/supplier.datasource.Impl");
const authMiddlewares_1 = require("../middlewares/authMiddlewares");
class SupplierRouter {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new supplier_datasource_Impl_1.SupplierDatasoruceImpl();
        const repository = new supplier_repository_Impl_1.SupplierRepositoryImpl(datasource);
        const service = new supplier_service_1.SupplierService(repository);
        const controller = new controller_1.SupplierController(service);
        router.get('/:module', [authMiddlewares_1.AuthMiddlewares.validateJWT], controller.init);
        router.get('/:module/getAll', [authMiddlewares_1.AuthMiddlewares.validateJWT], controller.getAll);
        router.post('/:module/getSupplier/', [authMiddlewares_1.AuthMiddlewares.validateJWT], controller.getSupplier);
        router.post('/:module', [authMiddlewares_1.AuthMiddlewares.validateJWT], controller.create);
        router.post('/:module/deleted', [authMiddlewares_1.AuthMiddlewares.validateJWT], controller.deletedSupplier);
        router.post('/:module/update', [authMiddlewares_1.AuthMiddlewares.validateJWT], controller.updateSupplier);
        return router;
    }
}
exports.SupplierRouter = SupplierRouter;
