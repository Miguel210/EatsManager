import { Router } from 'express';
import { MovementDatasourceImpl } from '../../infraestructure/movement/datasource/movement.datasource.impl';
import { MovementRepositoryImpl } from '../../infraestructure/movement/repository/movement.repository.impl';
import { MovementService } from '../services/movement.service';
import { MovementController } from './controller';



export class MovementRouter {

    static get routes(): Router {

        const routes = Router();
        const datasource = new MovementDatasourceImpl();
        const repository = new MovementRepositoryImpl(datasource);
        const service = new MovementService(repository);
        const controller = new MovementController(service);

        routes.post('/create/', controller.creatre);
        routes.post('/', controller.getAll);
        routes.get('/get/', controller.getById);
        routes.post('/update/', controller.update);




        return routes;
    }
}