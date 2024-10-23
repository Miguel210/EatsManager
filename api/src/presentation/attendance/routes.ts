import { Router } from "express";
import { AttendanceDatasouceImpl } from "../../infraestructure/attendance/datasource/attendance.datasource.impl";
import { AttendanceRepositoryImpl } from "../../infraestructure/attendance/repository/attendance.repository.impl";
import { AttendanceService } from "../services/attendance.service";
import { AttendanceController } from "./cotroller";





export class AttendanceRoutes {


    static routes(): Router {

        const routes = Router();

        const datasource = new AttendanceDatasouceImpl();
        const repository = new AttendanceRepositoryImpl(datasource);
        const service = new AttendanceService(repository);
        const controller = new AttendanceController(service)


        routes.get("/");
        routes.post("/get/");
        routes.post("/update/");
        routes.post("/create/");
        

        return routes;
    }
}