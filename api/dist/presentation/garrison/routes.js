"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GarrisonRouter = void 0;
const express_1 = require("express");
const garrison_datasource_impl_1 = require("../../infraestructure/garrison/datasource/garrison.datasource.impl");
const garrison_repository_impl_1 = require("../../infraestructure/garrison/repositories/garrison.repository.impl");
const garrison_service_1 = require("../services/garrison.service");
const controller_1 = require("./controller");
class GarrisonRouter {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasoruce = new garrison_datasource_impl_1.GarrisonDatasoruceImpl();
        const repository = new garrison_repository_impl_1.GarrisonRepositoryImpl(datasoruce);
        const service = new garrison_service_1.GarrisonService(repository);
        const controller = new controller_1.GarrisonController(service);
        router.post('/create/', controller.create);
        router.get('/', controller.getAll);
        router.post('/get/', controller.get);
        router.post('/update/', controller.update);
        router.post('/delete/', controller.delete);
        return router;
    }
}
exports.GarrisonRouter = GarrisonRouter;
