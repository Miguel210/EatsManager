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
exports.ClientOrderDetailDatasourceImpl = void 0;
const config_1 = require("../../../config");
const data_1 = require("../../../data");
const clientOrderDetail_entity_1 = require("../../../domain/entities/clientOrderDetail.entity");
class ClientOrderDetailDatasourceImpl {
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const detail = yield data_1.prisma.clientOrderDetail.create({
                data: {
                    id: config_1.Uuid.uuid(),
                    clientOrderId: dto.clientOrderId,
                    garrisonId: dto.garrisonId
                }
            });
            if (!detail)
                throw `ClientOrderDetail with data ${dto} not found`;
            return clientOrderDetail_entity_1.ClientOrderDetailEntity.fromObject(detail);
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const detail = yield data_1.prisma.clientOrderDetail.findFirst({
                where: {
                    id: id
                }
            });
            if (!detail)
                throw `ClientOrderDetail with id ${id} not found`;
            return clientOrderDetail_entity_1.ClientOrderDetailEntity.fromObject(detail);
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const detail = yield data_1.prisma.clientOrderDetail.findMany({
                where: {
                    id: form.id
                }
            });
            if (!detail)
                throw `ClientOrderDetail with data ${form} not found`;
            return detail.map(detail => clientOrderDetail_entity_1.ClientOrderDetailEntity.fromObject(detail));
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const detail = yield data_1.prisma.clientOrderDetail.update({
                where: {
                    id: dto.id
                },
                data: {
                    clientOrderId: dto.clientOrderId,
                    garrisonId: dto.garrisonId
                }
            });
            if (!detail)
                throw `ClientOrderDetail with data ${dto} not found`;
            return clientOrderDetail_entity_1.ClientOrderDetailEntity.fromObject(detail);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const detail = yield data_1.prisma.clientOrderDetail.update({
                where: {
                    id: id
                },
                data: {
                /*
                isDelete: true,
                deleteAt: new Date()
                */
                }
            });
            if (!detail)
                throw `ClientOrderDetail with id ${id} not found`;
            return clientOrderDetail_entity_1.ClientOrderDetailEntity.fromObject(detail);
        });
    }
}
exports.ClientOrderDetailDatasourceImpl = ClientOrderDetailDatasourceImpl;
