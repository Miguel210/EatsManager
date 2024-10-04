import { Router } from "express";
import { AuthRoutes } from "./auth/routes";
import { DashboardRoutes } from "./dashboard/routes";
import { MenuRoutes } from "./menu/routes";
import { SupplierRouter } from "./supplier/router";



export class AppRoutes {

    static get routes(): Router {
        const router = Router();

        router.use('/api/auth', AuthRoutes.routes);
        router.use('/api/dashboard', DashboardRoutes.routes);
        router.use('/api/menu', MenuRoutes.routes);
        router.use('/api/supplier', SupplierRouter.routes)



        return router;
    }
}