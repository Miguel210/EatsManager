import { Router } from "express";
import { EvaluationDatasourceImpl } from "../../infraestructure/evaluation/datasource/evaluation.datasource.impl";
import { EvaluationRepositoryImpl } from "../../infraestructure/evaluation/repository/evaluation.repository.impl";
import { EvaluationService } from "../services/evaluation.service";
import { EvaluationController } from "./controller";
import { AuthMiddlewares } from "../middlewares/authMiddlewares";




export class EvaluationRouter {

    static get routes(): Router {

        const routes = Router();

        const datasoruce = new EvaluationDatasourceImpl();
        const repository = new EvaluationRepositoryImpl(datasoruce);
        const service = new EvaluationService(repository);
        const controller = new EvaluationController(service )

        routes.post("/create/",[AuthMiddlewares.validateJWT], controller.create)
        routes.get("/",[AuthMiddlewares.validateJWT], controller.getAll)
        routes.post("/get/",[AuthMiddlewares.validateJWT], controller.getById)
        routes.post("/update/", [AuthMiddlewares.validateJWT], controller.update)

        return routes;
    }
}