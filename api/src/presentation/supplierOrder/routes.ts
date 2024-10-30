import { Router } from "express";
import { SupplierOrderDatasourceImpl } from "../../infraestructure/supplierOrder/datasource/supplierOrder.datasource.impl";
import { SupplierOrderRepositoryImpl } from "../../infraestructure/supplierOrder/repository/supplierOrder.repository.impl";
import { SupplierOrderService } from "../services/supplierOrder.service";
import { SupplierOrderController } from "./controller";



export class SupplierOrderRoutes {

    static get routes(): Router {

        const routes = Router();
        const datasource = new SupplierOrderDatasourceImpl();
        const repository = new SupplierOrderRepositoryImpl(datasource);
        const service = new SupplierOrderService(repository);
        const controller = new SupplierOrderController(service);

        routes.post('/create/', controller.create)
        routes.get('/', controller.getAll)
        routes.post('/get/', controller.get)
        routes.post('/update/', controller.update)
        routes.post('/delete/', controller.delete)

        return routes;
    }
}