import { Router } from "express";
import { AuthMiddlewares } from "../middlewares/authMiddlewares";
import { ProductController } from "./controller";
import { ProductDatasourceImpl } from "../../infraestructure/product/datasource/product.datasource.impl";
import { ProductService } from "../services/product.service";
import { ProductRepositoryImpl } from "../../infraestructure/product/repositories/product.repository.impl";



export class ProductRoutes {

    static get routes(): Router {

        const router = Router();

        const productDatasourceImpl = new ProductDatasourceImpl();
        const productRepository = new ProductRepositoryImpl(productDatasourceImpl);
        const productService = new ProductService(productRepository);
        const controller = new ProductController(productService);
        
        router.get('/',[AuthMiddlewares.validateJWT], controller.getAllp )
        router.post('/get/',[AuthMiddlewares.validateJWT], controller.getProduct )
        router.post('/update/',[AuthMiddlewares.validateJWT], controller.update)
        router.post('/delete/',[AuthMiddlewares.validateJWT], controller.delete)
        router.post('/create/',[AuthMiddlewares.validateJWT], controller.createp)
        


        return router;
    }
}