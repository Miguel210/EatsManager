import { Router } from "express";
import { ProductTypeDatasourceImpl } from "../../infraestructure/productType/datasource/productType.datasoruce";
import { ProductTypeRepositoryImpl } from "../../infraestructure/productType/repository/productType.repository";
import { ProductTypeService } from "../services/productType.service";
import { ProductTypeController } from "./controller";


export class ProductTypeRouter {

    static get routes(): Router {

        const router = Router();

        const datasoruceImpl = new ProductTypeDatasourceImpl();
        const repository = new ProductTypeRepositoryImpl(datasoruceImpl);
        const service = new ProductTypeService(repository);
        const controller = new ProductTypeController(service);

        router.post('/create/', controller.create);
        router.get('/', controller.getAll);

        return router;
    }
}