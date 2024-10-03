import { Router } from "express";
import { AuthMiddlewares } from "../middlewares/authMiddlewares";
import { DashboardController } from "./controller";
import { DashboardService } from "../services/dashboard.service";
import { ModuleService } from "../services/module.service";
import { ModelRepositoryImpl } from "../../infraestructure/module/repositories/module.repository.impl";
import { ModuleDatasourceImpl } from "../../infraestructure/module/datasource/module.datasource.impl";
import { MetricDatasourceImpl } from "../../infraestructure/metric/datasoruce/metric.datasource.impl";
import { MetricRepositoryImpl } from "../../infraestructure/metric/repositories/metric.repository.impl";



export class DashboardRoutes {

    static get routes(): Router {

        const router = Router();

        const moduleDatasourceImpl = new ModuleDatasourceImpl();
        const moduleRepository = new ModelRepositoryImpl(moduleDatasourceImpl);
        const moduleService = new ModuleService(moduleRepository);

        const metricDatasourceImpl = new MetricDatasourceImpl();
        const metricRepository = new MetricRepositoryImpl(metricDatasourceImpl);


        const dashboardService = new DashboardService(metricRepository);
        const controller = new DashboardController(dashboardService);

        router.get('/:module',[AuthMiddlewares.validateJWT], controller.inicio )

        return router;
    }

}