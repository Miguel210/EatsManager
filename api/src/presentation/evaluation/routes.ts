import { Router } from "express";
import { EvaluationDatasourceImpl } from "../../infraestructure/evaluation/datasource/evaluation.datasource.impl";
import { EvaluationRepositoryImpl } from "../../infraestructure/evaluation/repository/evaluation.repository.impl";
import { EvaluationService } from "../services/evaluation.service";
import { EvaluationController } from "./controller";




export class EvaluationRouter {

    static get routes(): Router {

        const routes = Router();

        const datasoruce = new EvaluationDatasourceImpl();
        const repository = new EvaluationRepositoryImpl(datasoruce);
        const service = new EvaluationService(repository);
        const controller = new EvaluationController(service )

        routes.post("/create/", controller.create)
        routes.get("/", controller.getAll)
        routes.post("/get/", controller.getById)
        routes.post("/update/", controller.update)

        return routes;
    }
}