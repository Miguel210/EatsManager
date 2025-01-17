"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientOrderDetailRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const clientOrderDetail_service_1 = require("../services/clientOrderDetail.service");
const clientOrderDetail_repository_impl_1 = require("../../infraestructure/clientOrderDetail/repository/clientOrderDetail.repository.impl");
const clientOrderDetailDatasource_impl_1 = require("../../infraestructure/clientOrderDetail/datasource/clientOrderDetailDatasource.impl");
class ClientOrderDetailRoutes {
    static get routes() {
        const routes = (0, express_1.Router)();
        const datasource = new clientOrderDetailDatasource_impl_1.ClientOrderDetailDatasourceImpl();
        const repository = new clientOrderDetail_repository_impl_1.ClientOrderDetailRepositoryImpl(datasource);
        const service = new clientOrderDetail_service_1.ClientOrderDetailService(repository);
        const controller = new controller_1.ClientOrderClientController(service);
        routes.post('/create/', controller.create);
        routes.get('/', controller.getAll);
        routes.post('/get/', controller.get);
        routes.post('/update/', controller.update);
        routes.post('/delete/', controller.delete);
        return routes;
    }
}
exports.ClientOrderDetailRoutes = ClientOrderDetailRoutes;
