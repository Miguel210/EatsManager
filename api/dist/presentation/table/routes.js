"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableRoutes = void 0;
const express_1 = require("express");
const authMiddlewares_1 = require("../middlewares/authMiddlewares");
const tableDatasource_impl_1 = require("../../infraestructure/table/datasource/tableDatasource.impl");
const controller_1 = require("./controller");
const table_service_1 = require("../services/table.service");
const tableRepository_impl_1 = require("../../infraestructure/table/repository/tableRepository.impl");
class TableRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const tableDatasourceImpl = new tableDatasource_impl_1.TableDatasourceImpl();
        const tableRepository = new tableRepository_impl_1.TableRepositoryImpl(tableDatasourceImpl);
        const tableService = new table_service_1.TableService(tableRepository);
        const controller = new controller_1.TableController(tableService);
        router.get('/', controller.getAllp);
        router.post('/get/', controller.getTable);
        router.post('/getorders/', controller.getDataTable);
        router.post('/clientOrder/', [authMiddlewares_1.AuthMiddlewares.validateJWT], controller.clientOrderDataTable);
        router.post('/PayClientOrder/', [authMiddlewares_1.AuthMiddlewares.validateJWT], controller.PayClientOrder);
        router.post('/finalizateClientOrder/', [authMiddlewares_1.AuthMiddlewares.validateJWT], controller.finalizateClientOrder);
        router.post('/update/', controller.update);
        router.post('/delete/', controller.delete);
        router.post('/create/', controller.create);
        return router;
    }
}
exports.TableRoutes = TableRoutes;
