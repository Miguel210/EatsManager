import { Router } from "express";
import { EmployeeDatasourceImpl } from "../../infraestructure/employee/datasource/employee.datasource.impl";
import { EmployeeRespositoryImpl } from "../../infraestructure/employee/repository/employee.repository.impl";
import { EmployeeService } from "../services/employee.service";
import { EmployeeController } from "./controller";






export class EmployeeRoutes {


    static get routes(): Router {

        const routes = Router();

        const datasoruce = new EmployeeDatasourceImpl();
        const repository = new EmployeeRespositoryImpl(datasoruce)
        const service = new EmployeeService(repository);
        const controller = new EmployeeController(service)

        routes.get("/")
        routes.post("/get/", controller.get)
        routes.post("/create/", controller.create)
        routes.post("/update/")
        routes.post("/delete/")



        return routes;
    }
}