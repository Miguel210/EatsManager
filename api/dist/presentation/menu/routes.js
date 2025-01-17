"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuRoutes = void 0;
const express_1 = require("express");
const authMiddlewares_1 = require("../middlewares/authMiddlewares");
const controller_1 = require("./controller");
const module_service_1 = require("../services/module.service");
const module_datasource_impl_1 = require("../../infraestructure/module/datasource/module.datasource.impl");
const module_repository_impl_1 = require("../../infraestructure/module/repositories/module.repository.impl");
class MenuRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const moduleDatasourceImpl = new module_datasource_impl_1.ModuleDatasourceImpl();
        const moduleRepository = new module_repository_impl_1.ModelRepositoryImpl(moduleDatasourceImpl);
        const moduleService = new module_service_1.ModuleService(moduleRepository);
        const controller = new controller_1.MenuController(moduleService);
        router.get('/:module/', [authMiddlewares_1.AuthMiddlewares.validateJWT], controller.menu);
        return router;
    }
}
exports.MenuRoutes = MenuRoutes;
