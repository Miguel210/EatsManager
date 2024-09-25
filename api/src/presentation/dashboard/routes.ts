import { Router } from "express";
import { AuthMiddlewares } from "../middlewares/authMiddlewares";
import { DashboardController } from "./controller";



export class DashboardRoutes {

    static get routes(): Router {

        const router = Router();


        const controller = new DashboardController();

        router.get('/dashboard',[AuthMiddlewares.validateJWT], controller.inicio )

        return router;
    }

}