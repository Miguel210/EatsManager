import { Router } from "express";
import { SupplierController } from "./controller";
import { SupplierService } from "../services/supplier.service";
import { SupplierRepositoryImpl } from "../../infraestructure/supplier/repository/supplier.repository.Impl";
import { SupplierDatasoruceImpl } from "../../infraestructure/supplier/datasource/supplier.datasource.Impl";
import { AuthMiddlewares } from "../middlewares/authMiddlewares";



export class SupplierRouter {

    static get routes(): Router {
        
        const router = Router();

        const datasource = new SupplierDatasoruceImpl();
        const repository = new SupplierRepositoryImpl(datasource);
        const service = new SupplierService(repository);
        const controller = new SupplierController(service);
        router.get('/:module',[AuthMiddlewares.validateJWT], controller.init)

        router.get('/:module/getAll',[AuthMiddlewares.validateJWT], controller.getAll)
        router.get('/:module/getSupplier',[AuthMiddlewares.validateJWT], controller.getSupplier)
        router.post('/:module',[AuthMiddlewares.validateJWT], controller.create)
        router.delete('/:module/deleted',[AuthMiddlewares.validateJWT], controller.deletedSupplier)
        router.post('/:module/update',[AuthMiddlewares.validateJWT], controller.updateSupplier)




        return router;
    }
}