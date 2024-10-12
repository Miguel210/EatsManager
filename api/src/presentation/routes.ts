import { Router } from "express";
import { AuthRoutes } from "./auth/routes";
import { DashboardRoutes } from "./dashboard/routes";
import { MenuRoutes } from "./menu/routes";
import { SupplierRouter } from "./supplier/router";
import { InventoryRouter } from "./inventory/router";
import { UtilRouter } from "./utils/router";



export class AppRoutes {

    static get routes(): Router {
        const router = Router();

        router.use('/api/auth', AuthRoutes.routes);
        router.use('/api/dashboard', DashboardRoutes.routes);
        router.use('/api/product', MenuRoutes.routes);
        router.use('/api/supplier', SupplierRouter.routes)
        router.use('/api/inventory', InventoryRouter.routes);
        router.use('/api/utils', UtilRouter.routes)



        return router;
    }
}