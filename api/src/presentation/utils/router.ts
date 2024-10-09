import { Router } from "express";
import { UtilController } from "./controller";
import { UtilService } from "../services/utils.service";




export class UtilRouter {


    static get routes(): Router {

        const router = Router();

        const service = new UtilService()
        const controller = new UtilController(service)

        router.get('/autocomplete/:table/:field', controller.autocomplete)

        return router;
    }
}