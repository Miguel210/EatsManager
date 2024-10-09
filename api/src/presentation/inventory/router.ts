import { Router } from "express";
import { InventoryDatasourceImpl } from "../../infraestructure/inventory/datasource/inventory.datasource.impl";
import { InventoryRepositoryImpl } from "../../infraestructure/inventory/repositories/inventory.repository.impl";
import { InventoryService } from "../services/inventory.service";
import { InventoryController } from "./controller";
import { AuthMiddlewares } from "../middlewares/authMiddlewares";




export class InventoryRouter {

    static get routes(): Router {

        const router = Router();

        const datasource = new InventoryDatasourceImpl();
        const repository = new InventoryRepositoryImpl(datasource);
        const service = new InventoryService(repository);
        const controller = new InventoryController(service);

        router.get('/:module',[AuthMiddlewares.validateJWT], controller.init)
        router.get('/:module/getall',[AuthMiddlewares.validateJWT], controller.getAll)
        router.post('/:module/deleted',[AuthMiddlewares.validateJWT], controller.createInv)

        return router;
    }
}