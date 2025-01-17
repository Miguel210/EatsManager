"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovementDetailRouter = void 0;
const express_1 = require("express");
const movementDetail_datasource_impl_1 = require("../../infraestructure/movementDetail/datasource/movementDetail.datasource.impl");
const movementDetail_repository_impl_1 = require("../../infraestructure/movementDetail/repository/movementDetail.repository.impl");
const movementDetail_service_1 = require("../services/movementDetail.service");
const controller_1 = require("./controller");
class MovementDetailRouter {
    static get routes() {
        const routes = (0, express_1.Router)();
        const datasource = new movementDetail_datasource_impl_1.MovementDetailDatasourceImpl();
        const repository = new movementDetail_repository_impl_1.MovementDetailRepositoryImpl(datasource);
        const service = new movementDetail_service_1.MovementsDetailService(repository);
        const controller = new controller_1.MovementDetailController(service);
        routes.post('/create/', controller.create);
        routes.get('/', controller.getAll);
        routes.post('/get/', controller.get);
        routes.post('/update/', controller.update);
        routes.post('/delete/', controller.delete);
        return routes;
    }
}
exports.MovementDetailRouter = MovementDetailRouter;
