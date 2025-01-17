"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferRouter = void 0;
const express_1 = require("express");
const offer_datasoruce_impl_1 = require("../../infraestructure/offer/datasoruce/offer.datasoruce.impl");
const offer_repository_impl_1 = require("../../infraestructure/offer/repository/offer.repository.impl");
const offer_service_1 = require("../services/offer.service");
const controller_1 = require("./controller");
class OfferRouter {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasoruce = new offer_datasoruce_impl_1.OfferDatasourceImpl();
        const repository = new offer_repository_impl_1.OfferRepositoryImpl(datasoruce);
        const service = new offer_service_1.OfferService(repository);
        const controller = new controller_1.OfferController(service);
        router.post('/create/', controller.create);
        router.get('/', controller.getAll);
        router.post('/get/', controller.get);
        router.post('/update/', controller.update);
        router.post('/delete/', controller.delete);
        return router;
    }
}
exports.OfferRouter = OfferRouter;
