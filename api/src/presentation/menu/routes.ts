import { Router } from "express";
import { AuthMiddlewares } from "../middlewares/authMiddlewares";
import { MenuController } from "./controller";
import { ModuleService } from "../services/module.service";
import { ModuleDatasourceImpl } from "../../infraestructure/module/datasource/module.datasource.impl";
import { ModelRepositoryImpl } from "../../infraestructure/module/repositories/module.repository.impl";



export class MenuRoutes {

    static get routes(): Router {

        const router = Router();

        const moduleDatasourceImpl = new ModuleDatasourceImpl();
        const moduleRepository = new ModelRepositoryImpl(moduleDatasourceImpl);
        const moduleService = new ModuleService(moduleRepository);
        const controller = new MenuController(moduleService);
        
        router.get('/:module/',[AuthMiddlewares.validateJWT], controller.menu )

        return router;
    }
}