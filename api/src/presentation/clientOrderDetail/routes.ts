import { Router } from "express";
<<<<<<< HEAD
import { ClientOrderClientController } from './controller';
import { ClientOrderDetailService } from "../services/clientOrderDetail.service";
import { ClientOrderDetailRepositoryImpl } from "../../infraestructure/clientOrderDetail/repository/clientOrderDetail.repository.impl";
import { ClientOrderDetailDatasourceImpl } from "../../infraestructure/clientOrderDetail/datasource/clientOrderDetailDatasource.impl";



export class OrderDetailRoutes {

    static get routes(): Router {

        const routes = Router();
        const datasource = new ClientOrderDetailDatasourceImpl();
        const repository = new ClientOrderDetailRepositoryImpl(datasource);
        const service = new ClientOrderDetailService(repository);
        const controller = new ClientOrderClientController(service);

        routes.post('/create/', controller.create)
        routes.get('/', controller.getAll)
        routes.post('/get/', controller.get)
        routes.post('/update/', controller.update)
        routes.post('/delete/', controller.delete)

=======
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
        
>>>>>>> c25ecbc1c71588473fbd7a76c230fd9f91950d65
        return routes;
    }
}