import { Router } from "express";
import { DevolutionClientDatasourceImpl } from "../../infraestructure/devolutionClient/datasource/devolutionClient.datasource.impl";
import { DevolutionClientRepositoryImpl } from "../../infraestructure/devolutionClient/repository/devolutionClient.repository.impl";
import { DevolutionClientService } from "../services/devolutionClient.service";
import { DevolutionClientController } from "./controller";



export class DevolutionClientRoutes {

    static get routes(): Router {

        const routes = Router();

        const datasource = new DevolutionClientDatasourceImpl();
        const repository = new DevolutionClientRepositoryImpl(datasource);
        const service = new DevolutionClientService(repository);
        const controller = new DevolutionClientController(service);

        routes.post('/create/', controller.create);
        routes.get('/', controller.getAll);
        routes.post('/get/', controller.get);
        routes.post('/update/', controller.update);
        routes.post('/delete/', controller.delete);
        

        return routes;
    }
}