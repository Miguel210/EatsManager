"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const auth_datasource_impl_1 = require("../../infraestructure/auth/datasource/auth.datasource.impl");
const auth_repository_impl_1 = require("../../infraestructure/auth/repositories/auth.repository.impl");
const auth_service_1 = require("../services/auth.service");
const authMiddlewares_1 = require("../middlewares/authMiddlewares");
class AuthRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const authDatasource = new auth_datasource_impl_1.AuthDatasourceImpl();
        const authRepository = new auth_repository_impl_1.AuthRepositoryImpl(authDatasource);
        const authservice = new auth_service_1.AuthService(authRepository);
        const controller = new controller_1.AuthController(authservice);
        router.post('/login', controller.loginUser);
        router.get('/modules', [authMiddlewares_1.AuthMiddlewares.validateJWT], controller.getModules);
        return router;
    }
}
exports.AuthRoutes = AuthRoutes;
