"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceRoutes = void 0;
const express_1 = require("express");
const attendance_datasource_impl_1 = require("../../infraestructure/attendance/datasource/attendance.datasource.impl");
const attendance_repository_impl_1 = require("../../infraestructure/attendance/repository/attendance.repository.impl");
const attendance_service_1 = require("../services/attendance.service");
const cotroller_1 = require("./cotroller");
class AttendanceRoutes {
    static get routes() {
        const routes = (0, express_1.Router)();
        const datasource = new attendance_datasource_impl_1.AttendanceDatasouceImpl();
        const repository = new attendance_repository_impl_1.AttendanceRepositoryImpl(datasource);
        const service = new attendance_service_1.AttendanceService(repository);
        const controller = new cotroller_1.AttendanceController(service);
        routes.post("/create/", controller.create);
        routes.get("/", controller.gets);
        routes.post("/get/", controller.get);
        routes.post("/update/", controller.update);
        return routes;
    }
}
exports.AttendanceRoutes = AttendanceRoutes;
