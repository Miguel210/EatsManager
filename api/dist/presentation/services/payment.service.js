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
exports.PaymentService = void 0;
const create_payment_1 = require("../../domain/use-cases/payment/create-payment");
const delete_payment_1 = require("../../domain/use-cases/payment/delete-payment");
const get_payment_1 = require("../../domain/use-cases/payment/get-payment");
const getAll_payment_1 = require("../../domain/use-cases/payment/getAll-payment");
const update_payment_1 = require("../../domain/use-cases/payment/update-payment");
class PaymentService {
    constructor(repository) {
        this.repository = repository;
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const payment = yield new create_payment_1.CreatePayment(this.repository).execute(dto)
                .then(pay => pay)
                .catch(error => console.log({ error }));
            return {
                data: {
                    payment
                }
            };
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const payment = yield new get_payment_1.GetPayment(this.repository).execute(id)
                .then(pay => pay)
                .catch(error => console.log({ error }));
            return {
                data: {
                    payment
                }
            };
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const payment = yield new getAll_payment_1.GetAllPayment(this.repository).execute(form)
                .then(pay => pay)
                .catch(error => console.log({ error }));
            return {
                data: {
                    payment
                }
            };
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const payment = yield new update_payment_1.UpdatePayment(this.repository).execute(dto)
                .then(pay => pay)
                .catch(error => console.log({ error }));
            return {
                data: {
                    payment
                }
            };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const payment = yield new delete_payment_1.DeleteePayment(this.repository).execute(id)
                .then(pay => pay)
                .catch(error => console.log({ error }));
            return {
                data: {
                    payment
                }
            };
        });
    }
}
exports.PaymentService = PaymentService;
