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
exports.OrderPaymentService = void 0;
const create_orderpayment_1 = require("../../domain/use-cases/orderPayment/create-orderpayment");
const delete_orderpayment_1 = require("../../domain/use-cases/orderPayment/delete-orderpayment");
const get_orderpayment_1 = require("../../domain/use-cases/orderPayment/get-orderpayment");
const getAll_orderpayment_1 = require("../../domain/use-cases/orderPayment/getAll-orderpayment");
const update_orderpayment_1 = require("../../domain/use-cases/orderPayment/update-orderpayment");
class OrderPaymentService {
    constructor(repository) {
        this.repository = repository;
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const orderPayment = yield new create_orderpayment_1.CreateOrderPayment(this.repository).execute(dto)
                .then(order => order)
                .catch(error => console.log({ error }));
            return {
                data: {
                    orderPayment
                }
            };
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const orderPayment = yield new get_orderpayment_1.GetOrderPayment(this.repository).execute(id)
                .then(order => order)
                .catch(error => console.log({ error }));
            return {
                data: {
                    orderPayment
                }
            };
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const orderPayment = yield new getAll_orderpayment_1.GetAllOrderPayment(this.repository).execute(form)
                .then(order => order)
                .catch(error => console.log({ error }));
            return {
                data: {
                    orderPayment
                }
            };
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const orderPayment = yield new update_orderpayment_1.UpdateOrderPayment(this.repository).execute(dto)
                .then(order => order)
                .catch(error => console.log({ error }));
            return {
                data: {
                    orderPayment
                }
            };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const orderPayment = yield new delete_orderpayment_1.DeleteOrderPayment(this.repository).execute(id)
                .then(order => order)
                .catch(error => console.log({ error }));
            return {
                data: {
                    orderPayment
                }
            };
        });
    }
}
exports.OrderPaymentService = OrderPaymentService;
