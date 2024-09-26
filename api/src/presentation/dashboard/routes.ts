import { Router } from "express";
import { AuthMiddlewares } from "../middlewares/authMiddlewares";
import { DashboardController } from "./controller";
import { DashboardService } from "../services/dashboard.service";



export class DashboardRoutes {

    static get routes(): Router {

        const router = Router();

        const dashboardService = new DashboardService();
        const controller = new DashboardController(dashboardService);

        router.get('/',[AuthMiddlewares.validateJWT], controller.inicio )

        return router;
    }

}