"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevolutionClientRoutes = void 0;
const express_1 = require("express");
const devolutionClient_datasource_impl_1 = require("../../infraestructure/devolutionClient/datasource/devolutionClient.datasource.impl");
const devolutionClient_repository_impl_1 = require("../../infraestructure/devolutionClient/repository/devolutionClient.repository.impl");
const devolutionClient_service_1 = require("../services/devolutionClient.service");
const controller_1 = require("./controller");
class DevolutionClientRoutes {
    static get routes() {
        const routes = (0, express_1.Router)();
        const datasource = new devolutionClient_datasource_impl_1.DevolutionClientDatasourceImpl();
        const repository = new devolutionClient_repository_impl_1.DevolutionClientRepositoryImpl(datasource);
        const service = new devolutionClient_service_1.DevolutionClientService(repository);
        const controller = new controller_1.DevolutionClientController(service);
        routes.post('/create/', controller.create);
        routes.get('/', controller.getAll);
        routes.post('/get/', controller.get);
        routes.post('/update/', controller.update);
        routes.post('/delete/', controller.delete);
        return routes;
    }
}
exports.DevolutionClientRoutes = DevolutionClientRoutes;
