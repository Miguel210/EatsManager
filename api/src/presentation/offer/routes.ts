import { Router } from "express";
import { OfferDatasourceImpl } from "../../infraestructure/offer/datasoruce/offer.datasoruce.impl";
import { OfferRepositoryImpl } from "../../infraestructure/offer/repository/offer.repository.impl";
import { OfferService } from "../services/offer.service";
import { OfferController } from "./controller";




export class OfferRouter {

    static get routes(): Router {

        const router = Router();

        const datasoruce = new OfferDatasourceImpl();
        const repository = new OfferRepositoryImpl(datasoruce);
        const service = new OfferService(repository);
        const controller = new OfferController(service);

        router.post('/create/', controller.create)
        router.get('/', controller.getAll)
        router.post('/get/', controller.get)
        router.post('/update/', controller.update)
        router.post('/delete/', controller.delete)


        return router
    }
}