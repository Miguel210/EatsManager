import { Router } from "express";
import { ClientOrderDetailDatasourceImpl } from "../../infraestructure/clientOrderDetail/datasource/clientOrderDetailDatasource.impl";
import { ClientOrderDetailRepositoryImpl } from "../../infraestructure/clientOrderDetail/repository/clientOrderDetail.repository.impl";
import { ClientOrderDetailService } from "../services/clientOrderDetail.service";
import { ClientOrderDetailController } from "./controller";




export class ClientOrderDetailRoutes {

    static get routes(): Router {
        const routes = Router();

        const datasource = new ClientOrderDetailDatasourceImpl();
        const repository = new ClientOrderDetailRepositoryImpl(datasource);
        const service = new ClientOrderDetailService(repository);
        const controller = new ClientOrderDetailController(service);
        
        routes.post('/create/', controller.create);
        routes.get('/', controller.getAll);
        routes.post('/get/', controller.get);
        routes.post('/update/', controller.update);
        routes.post('/delete/', controller.delete);
        
        return routes;
    }
}