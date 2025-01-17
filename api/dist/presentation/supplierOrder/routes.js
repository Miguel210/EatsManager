"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierOrderRoutes = void 0;
const express_1 = require("express");
const supplierOrder_datasource_impl_1 = require("../../infraestructure/supplierOrder/datasource/supplierOrder.datasource.impl");
const supplierOrder_repository_impl_1 = require("../../infraestructure/supplierOrder/repository/supplierOrder.repository.impl");
const supplierOrder_service_1 = require("../services/supplierOrder.service");
const controller_1 = require("./controller");
class SupplierOrderRoutes {
    static get routes() {
        const routes = (0, express_1.Router)();
        const datasource = new supplierOrder_datasource_impl_1.SupplierOrderDatasourceImpl();
        const repository = new supplierOrder_repository_impl_1.SupplierOrderRepositoryImpl(datasource);
        const service = new supplierOrder_service_1.SupplierOrderService(repository);
        const controller = new controller_1.SupplierOrderController(service);
        routes.post('/create/', controller.create);
        routes.get('/', controller.getAll);
        routes.post('/get/', controller.get);
        routes.post('/update/', controller.update);
        routes.post('/delete/', controller.delete);
        return routes;
    }
}
exports.SupplierOrderRoutes = SupplierOrderRoutes;
