"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableService = void 0;
const create_table_1 = require("../../domain/use-cases/table/create-table");
const get_table_1 = require("../../domain/use-cases/table/get-table");
const update_table_1 = require("../../domain/use-cases/table/update-table");
const delete_table_1 = require("../../domain/use-cases/table/delete-table");
const getAll_table_1 = require("../../domain/use-cases/table/getAll-table");
const getTableData_table_1 = require("../../domain/use-cases/table/getTableData-table");
const update_table_client_order_1 = require("../../domain/use-cases/table/update-table-client-order");
const pay_table_clientOrder_1 = require("../../domain/use-cases/table/pay-table-clientOrder");
const finalizate_table_clientOrder_1 = require("../../domain/use-cases/table/finalizate-table-clientOrder");
class TableService {
    constructor(repository) {
        this.repository = repository;
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const Table = yield new create_table_1.CreateTable(this.repository).execute(dto)
                .then(table => table)
                .catch(error => console.log({ error }));
            return {
                data: Table
            };
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const Table = yield new get_table_1.GetTable(this.repository).execute(id)
                .then(table => table)
                .catch(error => console.log({ error }));
            return {
                data: Table
            };
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const Tables = yield new getAll_table_1.GetAllTable(this.repository).execute(form)
                .then(table => table)
                .catch(error => console.log({ error }));
            return {
                data: Tables
            };
        });
    }
    getDataTable(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const Table = yield new getTableData_table_1.GetTableData(this.repository).execute(id)
                .then(table => table)
                .catch(error => console.log({ error }));
            return {
                data: Table
            };
        });
    }
    clientOrderDataTable(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const table = yield new update_table_client_order_1.UpdateTableCLientOrder(this.repository).execute(dto)
                .then(table => table)
                .catch(error => console.log({ error }));
            return {
                data: table
            };
        });
    }
    //Pagada cuenta 1 client
    PayCLientOrderDataTable(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('POR PAGAAAAAAAR');
            const Table = yield new pay_table_clientOrder_1.PayTableCLientOrder(this.repository).execute(dto)
                .then(table => table)
                .catch(error => console.log({ error }));
            return {
                data: Table
            };
        });
    }
    FinalizateClientOrderDataTable(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('POR PAGAAAAAAAR');
            const Table = yield new finalizate_table_clientOrder_1.FinalizateTableCLientOrder(this.repository).execute(dto)
                .then(table => table)
                .catch(error => console.log({ error }));
            return {
                data: Table
            };
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const Table = yield new update_table_1.UpdateTable(this.repository).execute(dto)
                .then(table => table)
                .catch(error => console.log({ error }));
            return {
                data: Table
            };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const Table = yield new delete_table_1.DeleteTable(this.repository).execute(id)
                .then(table => table)
                .catch(error => console.log({ error }));
            return {
                data: Table
            };
        });
    }
}
exports.TableService = TableService;
