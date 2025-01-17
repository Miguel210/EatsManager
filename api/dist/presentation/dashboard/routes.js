"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardRoutes = void 0;
const express_1 = require("express");
const authMiddlewares_1 = require("../middlewares/authMiddlewares");
const controller_1 = require("./controller");
const dashboard_service_1 = require("../services/dashboard.service");
const module_service_1 = require("../services/module.service");
const module_repository_impl_1 = require("../../infraestructure/module/repositories/module.repository.impl");
const module_datasource_impl_1 = require("../../infraestructure/module/datasource/module.datasource.impl");
const metric_datasource_impl_1 = require("../../infraestructure/metric/datasoruce/metric.datasource.impl");
const metric_repository_impl_1 = require("../../infraestructure/metric/repositories/metric.repository.impl");
class DashboardRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const moduleDatasourceImpl = new module_datasource_impl_1.ModuleDatasourceImpl();
        const moduleRepository = new module_repository_impl_1.ModelRepositoryImpl(moduleDatasourceImpl);
        const moduleService = new module_service_1.ModuleService(moduleRepository);
        const metricDatasourceImpl = new metric_datasource_impl_1.MetricDatasourceImpl();
        const metricRepository = new metric_repository_impl_1.MetricRepositoryImpl(metricDatasourceImpl);
        const dashboardService = new dashboard_service_1.DashboardService(metricRepository);
        const controller = new controller_1.DashboardController(dashboardService);
        router.get('/:module', [authMiddlewares_1.AuthMiddlewares.validateJWT], controller.inicio);
        return router;
    }
}
exports.DashboardRoutes = DashboardRoutes;
