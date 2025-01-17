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
exports.ClientOrderDatasourceImpl = void 0;
const config_1 = require("../../../config");
const data_1 = require("../../../data");
const clientOrder_entity_1 = require("../../../domain/entities/clientOrder.entity");
class ClientOrderDatasourceImpl {
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield data_1.prisma.clientOrder.create({
                data: {
                    id: config_1.Uuid.uuid(),
                    movementId: dto.movementId,
                    invoiceFolio: new Date().toDateString(),
                    paymentDate: new Date(dto.paymentDate),
                    status: dto.status,
                    tableId: dto.tableId
                }
            });
            if (!order)
                throw 'is not found';
            return clientOrder_entity_1.ClientOrderEntity.fromObject(order);
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield data_1.prisma.clientOrder.findFirst({
                where: {
                    id: id
                }
            });
            if (!order)
                throw 'is not found';
            return clientOrder_entity_1.ClientOrderEntity.fromObject(order);
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield data_1.prisma.clientOrder.findMany();
            if (!order)
                throw 'is not found';
            return order.map(order => clientOrder_entity_1.ClientOrderEntity.fromObject(order));
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ddddddddddddddddd');
            console.log(dto);
            console.log('ddddddddddddddddd');
            const order = yield data_1.prisma.clientOrder.update({
                where: {
                    id: dto.id
                },
                data: {
                    paymentDate: new Date(dto.paymentDate),
                    tableId: dto.tableId,
                    status: dto.status,
                    isActive: dto.isActive
                }
            });
            if (!order)
                throw 'is not found';
            return clientOrder_entity_1.ClientOrderEntity.fromObject(order);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield data_1.prisma.clientOrder.update({
                where: {
                    id: id
                },
                data: { /*
                    isDelete: true,
                    deleteAt: new Date()*/}
            });
            if (!order)
                throw 'is not found';
            return clientOrder_entity_1.ClientOrderEntity.fromObject(order);
        });
    }
}
exports.ClientOrderDatasourceImpl = ClientOrderDatasourceImpl;
