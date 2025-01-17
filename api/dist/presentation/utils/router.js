"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilRouter = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const utils_service_1 = require("../services/utils.service");
class UtilRouter {
    static get routes() {
        const router = (0, express_1.Router)();
        const service = new utils_service_1.UtilService();
        const controller = new controller_1.UtilController(service);
        router.get('/autocomplete/:table/:field', controller.autocomplete);
        router.get('/productOrder', controller.productOrder);
        return router;
    }
}
exports.UtilRouter = UtilRouter;
