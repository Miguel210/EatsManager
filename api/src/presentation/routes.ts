import { Router } from "express";
import { AuthRoutes } from "./auth/routes";
import { DashboardRoutes } from "./dashboard/routes";
import { ProductRoutes } from "./product/routes";
import { SupplierRouter } from "./supplier/router";
import { InventoryRouter } from "./inventory/router";
import { UtilRouter } from "./utils/router";
import { CategoryRouter } from "./category/router";
import { ProductTypeRouter } from "./productType/router";
import { GarrisonRouter } from "./garrison/routes";
import { OfferRouter } from "./offer/routes";
import { EmployeeRoutes } from "./employee/routes";
import { AttendanceRoutes } from "./attendance/routes";
import { EvaluationRouter } from "./evaluation/routes";
import { MovementRouter } from "./movement/routes";
import { DocumentRoutes } from "./document/routes";
import { MovementDetailRouter } from "./movementDetail/routes";
import { OrderPaymentRoutes } from "./orderPayment/routes";
import { PaymentRoutes } from "./payment/routes";
import { SupplierOrderRoutes } from "./supplierOrder/routes";
import { DevolutionClientRoutes } from "./devolutionClient/routes";
import { DevolutionSuppliertRoutes } from "./devolutionSupplier/routes";
import { ClientOrderRoutes } from "./clientOrder/routes";
import { TableRoutes } from "./table/routes";
import { ClientOrderDetailRoutes } from './clientOrderDetail/routes';



export class AppRoutes {

    static get routes(): Router {
        const router = Router();

        router.use('/api/auth', AuthRoutes.routes);
        router.use('/api/dashboard', DashboardRoutes.routes);
        router.use('/api/product', ProductRoutes.routes);
        router.use('/api/category', CategoryRouter.routes)
        router.use('/api/producttype', ProductTypeRouter.routes)
        router.use('/api/garrison', GarrisonRouter.routes)
        router.use('/api/supplier', SupplierRouter.routes)
        router.use('/api/inventory', InventoryRouter.routes);
        router.use('/api/promotion', OfferRouter.routes)
        router.use('/api/employee', EmployeeRoutes.routes)
        router.use('/api/attendance', AttendanceRoutes.routes)
        router.use('/api/evaluation', EvaluationRouter.routes)
        router.use('/api/movement', MovementRouter.routes)
        router.use('/api/document', DocumentRoutes.routes)
        router.use('/api/movementDetail', MovementDetailRouter.routes)
        router.use('/api/orderPayment', OrderPaymentRoutes.routes)
        router.use('/api/payment', PaymentRoutes.routes)
        router.use('/api/SupplierOrder', SupplierOrderRoutes.routes)
        router.use('/api/devolutionClient', DevolutionClientRoutes.routes)
        router.use('/api/DevolutionSupplier', DevolutionSuppliertRoutes.routes)
        router.use('/api/ClientOrder', ClientOrderRoutes.routes)
        router.use('/api/table', TableRoutes.routes)
        router.use('/api/ClientOrderDetail', ClientOrderDetailRoutes.routes)
        
        router.use('/api/utils', UtilRouter.routes)



        return router;
    }
}