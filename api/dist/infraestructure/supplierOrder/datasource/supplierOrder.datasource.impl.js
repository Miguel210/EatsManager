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
exports.SupplierOrderDatasourceImpl = void 0;
const config_1 = require("../../../config");
const data_1 = require("../../../data");
const supplierOrder_entity_1 = require("../../../domain/entities/supplierOrder.entity");
class SupplierOrderDatasourceImpl {
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield data_1.prisma.supplierOrder.create({
                data: {
                    id: config_1.Uuid.uuid(),
                    movementId: dto.movementId,
                    invoiceFolio: dto.invoiceFolio,
                    paymentDate: new Date(dto.paymentDate),
                    status: dto.status,
                    isActive: true
                }
            });
            if (!order)
                throw `supplierOrder with data ${dto} not found`;
            return supplierOrder_entity_1.SupplierOrderEntity.fromObject(order);
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield data_1.prisma.supplierOrder.findFirst({
                where: {
                    id: id
                }
            });
            if (!order)
                throw `supplierOrder with id ${id} not found`;
            return supplierOrder_entity_1.SupplierOrderEntity.fromObject(order);
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield data_1.prisma.supplierOrder.findMany();
            if (!order)
                throw `supplierOrder with form ${form} not found`;
            return order.map(order => supplierOrder_entity_1.SupplierOrderEntity.fromObject(order));
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.get(dto.id);
            const order = yield data_1.prisma.supplierOrder.update({
                where: {
                    id: dto.id
                },
                data: {
                    paymentDate: new Date(dto.paymentDate),
                    status: dto.status,
                    isActive: dto.isActive
                }
            });
            if (!order)
                throw `supplierOrder with id ${dto.id} not found`;
            return supplierOrder_entity_1.SupplierOrderEntity.fromObject(order);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.get(id);
            const order = yield data_1.prisma.supplierOrder.update({
                where: {
                    id: id
                },
                data: { /*
                    isDelete: true,
                    deleteAt: new Date() */}
            });
            if (!order)
                throw `supplierOrder with id ${id} not found`;
            return supplierOrder_entity_1.SupplierOrderEntity.fromObject(order);
        });
    }
}
exports.SupplierOrderDatasourceImpl = SupplierOrderDatasourceImpl;
