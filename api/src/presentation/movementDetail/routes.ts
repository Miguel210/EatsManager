import { Router } from "express";
import { MovementDetailDatasourceImpl } from "../../infraestructure/movementDetail/datasource/movementDetail.datasource.impl";
import { MovementDetailRepositoryImpl } from "../../infraestructure/movementDetail/repository/movementDetail.repository.impl";
import { MovementsDetailService } from "../services/movementDetail.service";
import { MovementDetailController } from "./controller";




export class MovementDetailRouter {

    static get routes(): Router {

        const routes = Router();
        const datasource = new MovementDetailDatasourceImpl();
        const repository = new MovementDetailRepositoryImpl(datasource);
        const service = new MovementsDetailService(repository);
        const controller = new MovementDetailController(service);

        routes.post('/create/', controller.create);
        routes.get('/', controller.getAll);
        routes.post('/get/', controller.get);
        routes.post('/update/', controller.update);
        routes.post('/delete/', controller.delete);



        return routes;
    }
}