"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeRoutes = void 0;
const express_1 = require("express");
const employee_datasource_impl_1 = require("../../infraestructure/employee/datasource/employee.datasource.impl");
const employee_repository_impl_1 = require("../../infraestructure/employee/repository/employee.repository.impl");
const employee_service_1 = require("../services/employee.service");
const controller_1 = require("./controller");
class EmployeeRoutes {
    static get routes() {
        const routes = (0, express_1.Router)();
        const datasoruce = new employee_datasource_impl_1.EmployeeDatasourceImpl();
        const repository = new employee_repository_impl_1.EmployeeRespositoryImpl(datasoruce);
        const service = new employee_service_1.EmployeeService(repository);
        const controller = new controller_1.EmployeeController(service);
        routes.get("/", controller.gets);
        routes.post("/get/", controller.get);
        routes.post("/create/", controller.create);
        routes.post("/update/", controller.update);
        routes.post("/delete/", controller.delete);
        return routes;
    }
}
exports.EmployeeRoutes = EmployeeRoutes;
