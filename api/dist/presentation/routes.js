"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./auth/routes");
const routes_2 = require("./dashboard/routes");
const routes_3 = require("./product/routes");
const router_1 = require("./supplier/router");
const router_2 = require("./inventory/router");
const router_3 = require("./utils/router");
const router_4 = require("./category/router");
const router_5 = require("./productType/router");
const routes_4 = require("./garrison/routes");
const routes_5 = require("./offer/routes");
const routes_6 = require("./employee/routes");
const routes_7 = require("./attendance/routes");
const routes_8 = require("./evaluation/routes");
const routes_9 = require("./movement/routes");
const routes_10 = require("./document/routes");
const routes_11 = require("./movementDetail/routes");
const routes_12 = require("./orderPayment/routes");
const routes_13 = require("./payment/routes");
const routes_14 = require("./supplierOrder/routes");
const routes_15 = require("./devolutionClient/routes");
const routes_16 = require("./devolutionSupplier/routes");
const routes_17 = require("./clientOrder/routes");
const routes_18 = require("./table/routes");
const routes_19 = require("./clientOrderDetail/routes");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/api/auth', routes_1.AuthRoutes.routes);
        router.use('/api/dashboard', routes_2.DashboardRoutes.routes);
        router.use('/api/product', routes_3.ProductRoutes.routes);
        router.use('/api/category', router_4.CategoryRouter.routes);
        router.use('/api/producttype', router_5.ProductTypeRouter.routes);
        router.use('/api/garrison', routes_4.GarrisonRouter.routes);
        router.use('/api/supplier', router_1.SupplierRouter.routes);
        router.use('/api/inventory', router_2.InventoryRouter.routes);
        router.use('/api/promotion', routes_5.OfferRouter.routes);
        router.use('/api/employee', routes_6.EmployeeRoutes.routes);
        router.use('/api/attendance', routes_7.AttendanceRoutes.routes);
        router.use('/api/evaluation', routes_8.EvaluationRouter.routes);
        router.use('/api/movement', routes_9.MovementRouter.routes);
        router.use('/api/document', routes_10.DocumentRoutes.routes);
        router.use('/api/movementDetail', routes_11.MovementDetailRouter.routes);
        router.use('/api/orderPayment', routes_12.OrderPaymentRoutes.routes);
        router.use('/api/payment', routes_13.PaymentRoutes.routes);
        router.use('/api/SupplierOrder', routes_14.SupplierOrderRoutes.routes);
        router.use('/api/devolutionClient', routes_15.DevolutionClientRoutes.routes);
        router.use('/api/DevolutionSupplier', routes_16.DevolutionSuppliertRoutes.routes);
        router.use('/api/ClientOrder', routes_17.ClientOrderRoutes.routes);
        router.use('/api/table', routes_18.TableRoutes.routes);
        router.use('/api/ClientOrderDetail', routes_19.ClientOrderDetailRoutes.routes);
        router.use('/api/utils', router_3.UtilRouter.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
