import { Router } from "express";
import { DocuemntDatasourceImpl } from '../../infraestructure/document/datasource/document.datasource.impl';
import { DocumentRepositoryImpl } from "../../infraestructure/document/repository/document.repository.impl";
import { DocumentService } from "../services/document.service";
import { DocumentController } from "./controller";




export class DocumentRoutes {

    static get routes(): Router {

        const routes = Router();
        const datasource = new DocuemntDatasourceImpl();
        const repository = new DocumentRepositoryImpl(datasource);
        const service = new DocumentService(repository);
        const controller = new DocumentController(service);

        routes.post('/create/', controller.create);
        routes.post('/get/', controller.get);
        routes.get('/', controller.getAll);
        routes.post('/update/', controller.update);
        routes.post('/delete/', controller.delete);



        return routes;
    }
}