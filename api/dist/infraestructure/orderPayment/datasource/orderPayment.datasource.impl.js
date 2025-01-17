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
exports.OrderPaymentDatasourceImpl = void 0;
const config_1 = require("../../../config");
const data_1 = require("../../../data");
const orderpayment_entity_1 = require("../../../domain/entities/orderpayment.entity");
class OrderPaymentDatasourceImpl {
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield data_1.prisma.orderPayment.create({
                data: {
                    id: config_1.Uuid.uuid(),
                    movementId: dto.movementId,
                    amount: dto.amount,
                    status: dto.status
                }
            });
            if (!order)
                throw `orderPayment with data ${dto} not found`;
            return orderpayment_entity_1.OrderpaymentEntity.fromObject(order);
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield data_1.prisma.orderPayment.findFirst({
                where: {
                    id: id
                }
            });
            if (!order)
                throw `orderPayment with id ${id} not found`;
            return orderpayment_entity_1.OrderpaymentEntity.fromObject(order);
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield data_1.prisma.orderPayment.findMany({
                where: {
                    isActive: form.isActive
                }
            });
            if (!order)
                throw `orderPayment with form ${form} not found`;
            return order.map(order => orderpayment_entity_1.OrderpaymentEntity.fromObject(order));
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.get(dto.id);
            const order = yield data_1.prisma.orderPayment.update({
                where: {
                    id: dto.id
                },
                data: {
                    isActive: dto.isActive,
                    amount: dto.amount,
                    status: dto.status
                }
            });
            if (!order)
                throw `orderPayment with id ${dto.id} not found`;
            return orderpayment_entity_1.OrderpaymentEntity.fromObject(order);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.get(id);
            const order = yield data_1.prisma.orderPayment.update({
                where: {
                    id: id
                },
                data: { /*
                    isDelete: true,
                    deleteAt: new Date()*/}
            });
            if (!order)
                throw `orderPayment with id ${id} not found`;
            return orderpayment_entity_1.OrderpaymentEntity.fromObject(order);
        });
    }
}
exports.OrderPaymentDatasourceImpl = OrderPaymentDatasourceImpl;
