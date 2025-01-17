"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentRoutes = void 0;
const express_1 = require("express");
const document_datasource_impl_1 = require("../../infraestructure/document/datasource/document.datasource.impl");
const document_repository_impl_1 = require("../../infraestructure/document/repository/document.repository.impl");
const document_service_1 = require("../services/document.service");
const controller_1 = require("./controller");
class DocumentRoutes {
    static get routes() {
        const routes = (0, express_1.Router)();
        const datasource = new document_datasource_impl_1.DocuemntDatasourceImpl();
        const repository = new document_repository_impl_1.DocumentRepositoryImpl(datasource);
        const service = new document_service_1.DocumentService(repository);
        const controller = new controller_1.DocumentController(service);
        routes.post('/create/', controller.create);
        routes.post('/get/', controller.get);
        routes.get('/', controller.getAll);
        routes.post('/update/', controller.update);
        routes.post('/delete/', controller.delete);
        return routes;
    }
}
exports.DocumentRoutes = DocumentRoutes;
