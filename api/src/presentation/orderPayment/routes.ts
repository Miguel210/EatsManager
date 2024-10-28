import { Router } from "express";
import { OrderPaymentDatasourceImpl } from "../../infraestructure/orderPayment/datasource/orderPayment.datasource.impl";
import { OrderPaymentRepositoryImpl } from "../../infraestructure/orderPayment/repository/orderPayment.repository.impl";
import { OrderPaymentService } from "../services/orderPayment.service";
import { OrderPaymentController } from "./controller";




export class OrderPaymentRoutes {

    static get routes(): Router {

        const routes = Router();
        const datasource = new OrderPaymentDatasourceImpl();
        const repository = new OrderPaymentRepositoryImpl(datasource);
        const service = new OrderPaymentService(repository);
        const controller = new OrderPaymentController(service);

        routes.post('/create/', controller.create);
        routes.get('/', controller.getAll);
        routes.post('/get/', controller.get);
        routes.post('/update/', controller.update);
        routes.post('/delete/', controller.delete);

        return routes;
    }
}