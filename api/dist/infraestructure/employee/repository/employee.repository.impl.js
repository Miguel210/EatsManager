"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeRespositoryImpl = void 0;
class EmployeeRespositoryImpl {
    constructor(datasoruce) {
        this.datasoruce = datasoruce;
    }
    create(dto) {
        return this.datasoruce.create(dto);
    }
    getById(id) {
        return this.datasoruce.getById(id);
    }
    gets(form) {
        return this.datasoruce.gets(form);
    }
    update(dto) {
        return this.datasoruce.update(dto);
    }
    delete(id) {
        return this.datasoruce.delete(id);
    }
}
exports.EmployeeRespositoryImpl = EmployeeRespositoryImpl;
