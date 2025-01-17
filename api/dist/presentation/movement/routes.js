"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovementRouter = void 0;
const express_1 = require("express");
const movement_datasource_impl_1 = require("../../infraestructure/movement/datasource/movement.datasource.impl");
const movement_repository_impl_1 = require("../../infraestructure/movement/repository/movement.repository.impl");
const movement_service_1 = require("../services/movement.service");
const controller_1 = require("./controller");
const authMiddlewares_1 = require("../middlewares/authMiddlewares");
class MovementRouter {
    static get routes() {
        const routes = (0, express_1.Router)();
        const datasource = new movement_datasource_impl_1.MovementDatasourceImpl();
        const repository = new movement_repository_impl_1.MovementRepositoryImpl(datasource);
        const service = new movement_service_1.MovementService(repository);
        const controller = new controller_1.MovementController(service);
        routes.post('/create/', [authMiddlewares_1.AuthMiddlewares.validateJWT], controller.creatre);
        routes.get('/', controller.getAll);
        routes.post('/get/', controller.getById);
        routes.post('/update/', controller.update);
        return routes;
    }
}
exports.MovementRouter = MovementRouter;
