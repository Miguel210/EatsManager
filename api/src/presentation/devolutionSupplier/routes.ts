import { Router } from "express";
import { DevolutionSupplierDatasourceImpl } from "../../infraestructure/devolutionSupplier/datasource/devolutionSupplier.datasource.impl";
import { DevolutionSupplierRepositoryImpl } from "../../infraestructure/devolutionSupplier/repository/devolutionSupplier.repository.impl";
import { DevolutionSupplierService } from "../services/devulutionSupplier.service";
import { DevolutionSupplierController } from "./controller";



export class DevolutionSuppliertRoutes {

    static get routes(): Router {

        const routes = Router();

        const datasource = new DevolutionSupplierDatasourceImpl();
        const repository = new DevolutionSupplierRepositoryImpl(datasource);
        const service = new DevolutionSupplierService(repository);
        const controller = new DevolutionSupplierController(service);

        routes.post('/create/', controller.create);
        routes.get('/', controller.getAll);
        routes.post('/get/', controller.get);
        routes.post('/update/', controller.update);
        routes.post('/delete/', controller.delete);
        

        return routes;
    }
}