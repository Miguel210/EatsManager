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
exports.DevolutionSupplierDatasourceImpl = void 0;
const config_1 = require("../../../config");
const data_1 = require("../../../data");
const devolutionSupplier_entity_1 = require("../../../domain/entities/devolutionSupplier.entity");
class DevolutionSupplierDatasourceImpl {
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const devolution = yield data_1.prisma.devolutionSupplier.create({
                data: {
                    id: config_1.Uuid.uuid(),
                    movementId: dto.movementId,
                    paymentDate: new Date(dto.paymentDate),
                    status: dto.status,
                    invoiceFolio: dto.inoiceFolio
                }
            });
            if (!devolution)
                throw 'devolution is not found';
            return devolutionSupplier_entity_1.DevolutionSupplierEntity.fromObject(devolution);
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const devolution = yield data_1.prisma.devolutionSupplier.findFirst({
                where: {
                    id: id
                }
            });
            if (!devolution)
                throw 'devolution is not found';
            return devolutionSupplier_entity_1.DevolutionSupplierEntity.fromObject(devolution);
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const devolution = yield data_1.prisma.devolutionSupplier.findMany();
            if (!devolution)
                throw 'devolution is not found';
            return devolution.map(devolution => devolutionSupplier_entity_1.DevolutionSupplierEntity.fromObject(devolution));
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const devolution = yield data_1.prisma.devolutionSupplier.update({
                where: {
                    id: dto.id
                },
                data: {
                    paymentDate: new Date(dto.paymentDate),
                    status: dto.status,
                    isActive: dto.isActive
                }
            });
            if (!devolution)
                throw 'devolution is not found';
            return devolutionSupplier_entity_1.DevolutionSupplierEntity.fromObject(devolution);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const devolution = yield data_1.prisma.devolutionSupplier.update({
                where: {
                    id: id
                },
                data: { /*
                    isDelete: true,
                    deleteAt: new Date()*/}
            });
            if (!devolution)
                throw 'devolution is not found';
            return devolutionSupplier_entity_1.DevolutionSupplierEntity.fromObject(devolution);
        });
    }
}
exports.DevolutionSupplierDatasourceImpl = DevolutionSupplierDatasourceImpl;
