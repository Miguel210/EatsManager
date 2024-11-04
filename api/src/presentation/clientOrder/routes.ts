import { Router } from "express";
import { ClientOrderDatasourceImpl } from "../../infraestructure/clientOrder/datasource/clientOrder.datasource.impl";
import { ClientOrderRepositoryImpl } from "../../infraestructure/clientOrder/repository/clientOrder.repository.impl";
import { ClientOrderService } from "../services/clientOrder.service";
import { ClientOrderController } from "./controller";



export class ClientOrderRoutes {

    static get routes(): Router {
        const routes = Router();

        const datasource = new ClientOrderDatasourceImpl();
        const repository = new ClientOrderRepositoryImpl(datasource);
        const service = new ClientOrderService(repository);
        const controller = new ClientOrderController(service);
        
        routes.post('/create/', controller.create);
        routes.get('/', controller.getAll);
        routes.post('/get/', controller.get);
        routes.post('/update/', controller.update);
        routes.post('/delete/', controller.delete);
        
        return routes;
    }
}