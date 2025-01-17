"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRoutes = void 0;
const express_1 = require("express");
const payment_datasource_impl_1 = require("../../infraestructure/payment/datasource/payment.datasource.impl");
const payment_repository_impl_1 = require("../../infraestructure/payment/repository/payment.repository.impl");
const payment_service_1 = require("../services/payment.service");
const controller_1 = require("./controller");
class PaymentRoutes {
    static get routes() {
        const routes = (0, express_1.Router)();
        const datasource = new payment_datasource_impl_1.PaymentDatasourceImpl();
        const repository = new payment_repository_impl_1.PaymentRepositoryImpl(datasource);
        const service = new payment_service_1.PaymentService(repository);
        const controller = new controller_1.PaymentController(service);
        routes.post('/create/', controller.create);
        routes.post('/get/', controller.get);
        routes.get('/', controller.getAll);
        routes.post('/update/', controller.update);
        routes.post('/delete/', controller.delete);
        return routes;
    }
}
exports.PaymentRoutes = PaymentRoutes;
