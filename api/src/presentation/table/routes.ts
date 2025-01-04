import { Router } from "express";
import { AuthMiddlewares } from "../middlewares/authMiddlewares";
import { TableDatasourceImpl } from "../../infraestructure/table/datasource/tableDatasource.impl";
import { TableController } from "./controller";
import { TableService } from "../services/table.service";
import { TableRepositoryImpl } from "../../infraestructure/table/repository/tableRepository.impl";



export class TableRoutes {

    static get routes(): Router {

        const router = Router();

        const tableDatasourceImpl = new TableDatasourceImpl();
        const tableRepository = new TableRepositoryImpl(tableDatasourceImpl);
        const tableService = new TableService(tableRepository);
        const controller = new TableController(tableService);
        
        router.get('/', controller.getAllp )
        router.post('/get/', controller.getTable )
        router.post('/getorders/', controller.getDataTable )
        router.post('/clientOrder/', [AuthMiddlewares.validateJWT],controller.clientOrderDataTable)

        router.post('/update/', controller.update)
        router.post('/delete/', controller.delete)
        router.post('/create/', controller.create)
        


        return router;
    }
}