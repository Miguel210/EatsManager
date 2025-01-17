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
exports.SupplierOrderService = void 0;
const create_supplierOrder_1 = require("../../domain/use-cases/supplierOrder/create-supplierOrder");
const delete_supplierOrder_1 = require("../../domain/use-cases/supplierOrder/delete-supplierOrder");
const get_supplierOrder_1 = require("../../domain/use-cases/supplierOrder/get-supplierOrder");
const getAll_supplierOrder_1 = require("../../domain/use-cases/supplierOrder/getAll-supplierOrder");
const update_supplierOrder_1 = require("../../domain/use-cases/supplierOrder/update-supplierOrder");
class SupplierOrderService {
    constructor(repository) {
        this.repository = repository;
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield new create_supplierOrder_1.CreateSupplierOrder(this.repository).execute(dto)
                .then(order => order)
                .catch(error => console.log({ error }));
            return {
                data: {
                    order
                }
            };
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield new get_supplierOrder_1.GetSupplierOrder(this.repository).execute(id)
                .then(order => order)
                .catch(error => console.log({ error }));
            return {
                data: {
                    order
                }
            };
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield new getAll_supplierOrder_1.GetAllSupplierOrder(this.repository).execute(form)
                .then(order => order)
                .catch(error => console.log({ error }));
            return {
                data: {
                    order
                }
            };
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield new update_supplierOrder_1.UpdateSupplierOrder(this.repository).execute(dto)
                .then(order => order)
                .catch(error => console.log({ error }));
            return {
                data: {
                    order
                }
            };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield new delete_supplierOrder_1.DeleteSupplierOrder(this.repository).execute(id)
                .then(order => order)
                .catch(error => console.log({ error }));
            return {
                data: {
                    order
                }
            };
        });
    }
}
exports.SupplierOrderService = SupplierOrderService;
