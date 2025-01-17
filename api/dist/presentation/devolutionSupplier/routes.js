"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevolutionSuppliertRoutes = void 0;
const express_1 = require("express");
const devolutionSupplier_datasource_impl_1 = require("../../infraestructure/devolutionSupplier/datasource/devolutionSupplier.datasource.impl");
const devolutionSupplier_repository_impl_1 = require("../../infraestructure/devolutionSupplier/repository/devolutionSupplier.repository.impl");
const devulutionSupplier_service_1 = require("../services/devulutionSupplier.service");
const controller_1 = require("./controller");
class DevolutionSuppliertRoutes {
    static get routes() {
        const routes = (0, express_1.Router)();
        const datasource = new devolutionSupplier_datasource_impl_1.DevolutionSupplierDatasourceImpl();
        const repository = new devolutionSupplier_repository_impl_1.DevolutionSupplierRepositoryImpl(datasource);
        const service = new devulutionSupplier_service_1.DevolutionSupplierService(repository);
        const controller = new controller_1.DevolutionSupplierController(service);
        routes.post('/create/', controller.create);
        routes.get('/', controller.getAll);
        routes.post('/get/', controller.get);
        routes.post('/update/', controller.update);
        routes.post('/delete/', controller.delete);
        return routes;
    }
}
exports.DevolutionSuppliertRoutes = DevolutionSuppliertRoutes;
