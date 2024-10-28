import { Router } from "express";
import { PaymentDatasourceImpl } from "../../infraestructure/payment/datasource/payment.datasource.impl";
import { PaymentRepositoryImpl } from "../../infraestructure/payment/repository/payment.repository.impl";
import { PaymentService } from "../services/payment.service";
import { PaymentController } from "./controller";





export class PaymentRoutes {


    static get routes(): Router {

        const routes = Router();
        const datasource = new PaymentDatasourceImpl();
        const repository = new PaymentRepositoryImpl(datasource);
        const service = new PaymentService(repository);
        const controller = new PaymentController(service);

        routes.post('/cretae/', controller.create);
        routes.post('/get/', controller.get);
        routes.get('/', controller.getAll);
        routes.post('/update/', controller.update);
        routes.post('/delete/', controller.delete);


        return routes;
    }
}