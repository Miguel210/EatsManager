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
exports.PaymentDatasourceImpl = void 0;
const config_1 = require("../../../config");
const data_1 = require("../../../data");
const payment_entity_1 = require("../../../domain/entities/payment.entity");
class PaymentDatasourceImpl {
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const payment = yield data_1.prisma.payment.create({
                data: {
                    id: config_1.Uuid.uuid(),
                    orderPaymentId: dto.orderpaymentId,
                    amount: dto.amount,
                    typePaymentId: dto.typePaymentId
                }
            });
            if (!payment)
                throw `movementDetail with data ${dto} not found`;
            console.log(payment);
            return payment_entity_1.PaymentEntity.fromObject(payment);
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const payment = yield data_1.prisma.payment.findFirst({
                where: {
                    id: id
                }
            });
            if (!payment)
                throw `movementDetail with id ${id} not found`;
            return payment_entity_1.PaymentEntity.fromObject(payment);
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const payment = yield data_1.prisma.payment.findMany({
                where: {
                    typePaymentId: {
                        in: form.typePaymentId || undefined
                    }
                }
            });
            if (!payment)
                throw `movementDetail with form ${form} not found`;
            return payment.map(payment => payment_entity_1.PaymentEntity.fromObject(payment));
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const payment = yield data_1.prisma.payment.update({
                where: {
                    id: dto.id
                },
                data: {
                    typePaymentId: dto.typePaymentId,
                    amount: dto.amount,
                    isActive: dto.isActive
                }
            });
            if (!payment)
                throw `movementDetail with id ${dto.id} not found`;
            return payment_entity_1.PaymentEntity.fromObject(payment);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const payment = yield data_1.prisma.payment.update({
                where: {
                    id: id
                },
                data: { /*
                    isDelete: true,
                    deleteAt: new Date()*/}
            });
            if (!payment)
                throw `movementDetail with id ${id} not found`;
            return payment_entity_1.PaymentEntity.fromObject(payment);
        });
    }
}
exports.PaymentDatasourceImpl = PaymentDatasourceImpl;
