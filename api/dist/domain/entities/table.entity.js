"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class TableEntity {
    constructor(id, description, status, mainTable, isActive, clientOrder) {
        this.id = id;
        this.description = description;
        this.status = status;
        this.mainTable = mainTable;
        this.isActive = isActive;
        this.clientOrder = clientOrder;
    }
    static fromObject(object) {
        const { id, description, status, mainTable, isActive, clientOrder } = object;
        if (!id)
            throw custom_error_1.CustomError.badRequest('Missing id');
        if (!description)
            throw custom_error_1.CustomError.badRequest('Missing description');
        if (!status)
            throw custom_error_1.CustomError.badRequest('Missing status');
        //if( !id ) throw CustomError.badRequest('Missing id');
        if (isActive === undefined)
            throw custom_error_1.CustomError.badRequest('Missing isActive');
        return new TableEntity(id, description, status, mainTable, isActive, clientOrder);
    }
}
exports.TableEntity = TableEntity;
