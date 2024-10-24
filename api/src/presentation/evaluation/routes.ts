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

        routes.post("/create/")
        routes.get("/")
        routes.post("/get/")
        routes.post("/update/")

        return routes;
    }
}