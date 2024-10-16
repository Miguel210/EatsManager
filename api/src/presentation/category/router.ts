import { Router } from "express";
import { CategoryDatasourceImpl } from "../../infraestructure/category/datasoruce/category.datasoruce.impl";
import { CategoryRepositoryImpl } from "../../infraestructure/category/repositories/category.datasource.impl";
import { CategoryService } from "../services/category.service";
import { CategoryController } from "./controller";



export class CategoryRouter {

    static get routes(): Router {

        const router = Router();

        const categoryDatasourceImpl = new CategoryDatasourceImpl();
        const categoryRepository = new CategoryRepositoryImpl(categoryDatasourceImpl)
        const service = new CategoryService(categoryRepository);
        const controller = new CategoryController(service);
        
        
        router.get('/', controller.getAllc)
        router.post('/get/', controller.getCategory)



        return router;

    }
}