import { Router } from "express";
import { GarrisonDatasoruceImpl } from "../../infraestructure/garrison/datasource/garrison.datasource.impl";
import { GarrisonRepositoryImpl } from "../../infraestructure/garrison/repositories/garrison.repository.impl";
import { GarrisonService } from "../services/garrison.service";
import { GarrisonController } from "./controller";



export class GarrisonRouter {


    static get routes(): Router {

        const router = Router();
        
        const datasoruce = new GarrisonDatasoruceImpl();
        const repository = new GarrisonRepositoryImpl(datasoruce);
        const service = new GarrisonService(repository);
        const controller = new GarrisonController(service)
    
        router.post('/create/', controller.create);
        router.get('/', controller.getAll);
        router.post('/get/', controller.getAll);
        router.post('/update', controller.update);
        router.post('/delete/', controller.delete);



        return router;
    }
}