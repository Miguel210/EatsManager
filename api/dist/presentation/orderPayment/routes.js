"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderPaymentRoutes = void 0;
const express_1 = require("express");
const orderPayment_datasource_impl_1 = require("../../infraestructure/orderPayment/datasource/orderPayment.datasource.impl");
const orderPayment_repository_impl_1 = require("../../infraestructure/orderPayment/repository/orderPayment.repository.impl");
const orderPayment_service_1 = require("../services/orderPayment.service");
const controller_1 = require("./controller");
class OrderPaymentRoutes {
    static get routes() {
        const routes = (0, express_1.Router)();
        const datasource = new orderPayment_datasource_impl_1.OrderPaymentDatasourceImpl();
        const repository = new orderPayment_repository_impl_1.OrderPaymentRepositoryImpl(datasource);
        const service = new orderPayment_service_1.OrderPaymentService(repository);
        const controller = new controller_1.OrderPaymentController(service);
        routes.post('/create/', controller.create);
        routes.get('/', controller.getAll);
        routes.post('/get/', controller.get);
        routes.post('/update/', controller.update);
        routes.post('/delete/', controller.delete);
        return routes;
    }
}
exports.OrderPaymentRoutes = OrderPaymentRoutes;
