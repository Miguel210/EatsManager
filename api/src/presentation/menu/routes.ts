import { Router } from "express";
import { AuthMiddlewares } from "../middlewares/authMiddlewares";
import { MenuController } from "./controller";



export class MenuRoutes {

    static get routes(): Router {

        const router = Router();

        const controller = new MenuController();
        router.get('/',[AuthMiddlewares.validateJWT], controller.menu )

        return router;
    }
}