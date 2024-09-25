import {  Router } from "express";
import { AuthController } from "./controller";
import { AuthDatasourceImpl } from '../../infraestructure/auth/datasource/auth.datasource.impl';
import { AuthRepositoryImpl } from "../../infraestructure/auth/repositories/auth.repository.impl";
import { AuthService } from '../services/auth.service';
import { ModuleDatasourceImpl } from '../../infraestructure/module/datasource/module.datasource.impl';
import { ModelRepositoryImpl } from "../../infraestructure/module/repositories/module.repository.impl";
import { AuthMiddlewares } from "../middlewares/authMiddlewares";




export class AuthRoutes {

    static get routes(): Router {
        const router = Router();

        const authDatasource= new AuthDatasourceImpl();
        const moduleDatasource = new ModuleDatasourceImpl()

        const moduleRepository = new ModelRepositoryImpl(moduleDatasource)
        const authRepository = new AuthRepositoryImpl(authDatasource);

        const authservice = new AuthService(authRepository,moduleRepository);
        const controller = new AuthController(authservice)

        router.post('/login', controller.loginUser )
        router.get('/menu',[AuthMiddlewares.validateJWT], controller.loginUser )



        return router;
    }
}