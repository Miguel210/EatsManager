import { Router } from "express";
import { AttendanceDatasouceImpl } from "../../infraestructure/attendance/datasource/attendance.datasource.impl";
import { AttendanceRepositoryImpl } from "../../infraestructure/attendance/repository/attendance.repository.impl";
import { AttendanceService } from "../services/attendance.service";
import { AttendanceController } from "./cotroller";





export class AttendanceRoutes {


    static get routes(): Router {

        const routes = Router();

        const datasource = new AttendanceDatasouceImpl();
        const repository = new AttendanceRepositoryImpl(datasource);
        const service = new AttendanceService(repository);
        const controller = new AttendanceController(service)

        
        routes.post("/create/", controller.create);
        routes.get("/", controller.gets);
        routes.post("/get/", controller.get);
        routes.post("/update/", controller.update);
        

        return routes;
    }
}