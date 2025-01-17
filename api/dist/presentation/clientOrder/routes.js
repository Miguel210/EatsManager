"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientOrderRoutes = void 0;
const express_1 = require("express");
const clientOrder_datasource_impl_1 = require("../../infraestructure/clientOrder/datasource/clientOrder.datasource.impl");
const clientOrder_repository_impl_1 = require("../../infraestructure/clientOrder/repository/clientOrder.repository.impl");
const clientOrder_service_1 = require("../services/clientOrder.service");
const controller_1 = require("./controller");
class ClientOrderRoutes {
    static get routes() {
        const routes = (0, express_1.Router)();
        const datasource = new clientOrder_datasource_impl_1.ClientOrderDatasourceImpl();
        const repository = new clientOrder_repository_impl_1.ClientOrderRepositoryImpl(datasource);
        const service = new clientOrder_service_1.ClientOrderService(repository);
        const controller = new controller_1.ClientOrderController(service);
        routes.post('/create/', controller.create);
        routes.get('/', controller.getAll);
        routes.post('/get/', controller.get);
        routes.post('/update/', controller.update);
        routes.post('/delete/', controller.delete);
        return routes;
    }
}
exports.ClientOrderRoutes = ClientOrderRoutes;
