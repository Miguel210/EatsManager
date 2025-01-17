"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationRouter = void 0;
const express_1 = require("express");
const evaluation_datasource_impl_1 = require("../../infraestructure/evaluation/datasource/evaluation.datasource.impl");
const evaluation_repository_impl_1 = require("../../infraestructure/evaluation/repository/evaluation.repository.impl");
const evaluation_service_1 = require("../services/evaluation.service");
const controller_1 = require("./controller");
const authMiddlewares_1 = require("../middlewares/authMiddlewares");
class EvaluationRouter {
    static get routes() {
        const routes = (0, express_1.Router)();
        const datasoruce = new evaluation_datasource_impl_1.EvaluationDatasourceImpl();
        const repository = new evaluation_repository_impl_1.EvaluationRepositoryImpl(datasoruce);
        const service = new evaluation_service_1.EvaluationService(repository);
        const controller = new controller_1.EvaluationController(service);
        routes.post("/create/", [authMiddlewares_1.AuthMiddlewares.validateJWT], controller.create);
        routes.get("/", [authMiddlewares_1.AuthMiddlewares.validateJWT], controller.getAll);
        routes.post("/get/", [authMiddlewares_1.AuthMiddlewares.validateJWT], controller.getById);
        routes.post("/update/", [authMiddlewares_1.AuthMiddlewares.validateJWT], controller.update);
        return routes;
    }
}
exports.EvaluationRouter = EvaluationRouter;
