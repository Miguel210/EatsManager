import {  Router } from "express";
import { AuthController } from "./controller";
import { AuthDatasourceImpl } from '../../infraestructure/auth/datasource/auth.datasource.impl';
import { AuthRepositoryImpl } from "../../infraestructure/auth/repositories/auth.repository.impl";
import { AuthService } from '../services/auth.service';




export class AuthRoutes {

    static get routes(): Router {
        const router = Router();

        const authDatasource= new AuthDatasourceImpl();
        const authRepository = new AuthRepositoryImpl(authDatasource);
        const authservice = new AuthService(authRepository);
        const controller = new AuthController(authservice)

        router.post('/login', controller.loginUser )


        return router;
    }
}