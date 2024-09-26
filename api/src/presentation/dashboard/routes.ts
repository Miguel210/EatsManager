import { Router } from "express";
import { AuthMiddlewares } from "../middlewares/authMiddlewares";
import { DashboardController } from "./controller";
import { DashboardService } from "../services/dashboard.service";
import { ModuleService } from "../services/module.service";
import { ModelRepositoryImpl } from "../../infraestructure/module/repositories/module.repository.impl";
import { ModuleDatasourceImpl } from "../../infraestructure/module/datasource/module.datasource.impl";



export class DashboardRoutes {

    static get routes(): Router {

        const router = Router();

        const moduleDatasourceImpl = new ModuleDatasourceImpl();
        const moduleRepository = new ModelRepositoryImpl(moduleDatasourceImpl);
        const moduleService = new ModuleService(moduleRepository);

        const dashboardService = new DashboardService(moduleService);
        const controller = new DashboardController(dashboardService);

        router.get('/:module',[AuthMiddlewares.validateJWT], controller.inicio )

        return router;
    }

}