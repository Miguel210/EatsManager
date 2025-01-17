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
exports.GarrisonDatasoruceImpl = void 0;
const config_1 = require("../../../config");
const data_1 = require("../../../data");
const garrison_entity_1 = require("../../../domain/entities/garrison.entity");
const product_datasource_impl_1 = require("../../product/datasource/product.datasource.impl");
class GarrisonDatasoruceImpl {
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const garrison = yield data_1.prisma.garrison.create({
                data: {
                    id: config_1.Uuid.uuid(),
                    dishId: dto.dishId,
                    garrisonId: dto.garrisonId,
                    quantity: dto.quantity,
                    identifier: dto.identifier,
                    isActive: dto.isActive
                }
            });
            if (!garrison)
                throw `Garrison with data ${garrison} not found`;
            return garrison_entity_1.GarrisonEntity.fromObject(garrison);
        });
    }
    getAll(dishId) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = new product_datasource_impl_1.ProductDatasourceImpl();
            yield product.findById(dishId);
            const garrison = yield data_1.prisma.garrison.findMany({
                where: {
                    dishId: dishId,
                    isDelete: false
                },
                select: {
                    id: true,
                    quantity: true,
                    identifier: true,
                    garrisonDish: {
                        select: {
                            description: true
                        }
                    },
                    garrisonMainDish: {
                        select: {
                            description: true
                        }
                    },
                    isActive: true
                }
            });
            if (!garrison)
                throw `Garrison with data ${garrison} not found`;
            return garrison.map(garrison => garrison_entity_1.GarrisonEntity.fromObject(garrison));
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const garrison = yield data_1.prisma.garrison.findFirst({
                where: {
                    id: id,
                    isDelete: false
                }
            });
            if (!garrison)
                throw `Garrison with id ${id} not found`;
            return garrison_entity_1.GarrisonEntity.fromObject(garrison);
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getById(dto.id);
            const garrison = yield data_1.prisma.garrison.update({
                where: {
                    id: dto.id,
                },
                data: {
                    quantity: dto.quantity,
                    identifier: dto.identifier
                }
            });
            if (!garrison)
                throw `Garrison with data ${dto} not found`;
            return garrison_entity_1.GarrisonEntity.fromObject(garrison);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getById(id);
            const garrison = yield data_1.prisma.garrison.update({
                where: {
                    id: id
                },
                data: {
                    deleteAt: new Date(),
                    isDelete: true
                }
            });
            if (!garrison)
                throw `Garrison with id ${id} not found`;
            return garrison_entity_1.GarrisonEntity.fromObject(garrison);
        });
    }
}
exports.GarrisonDatasoruceImpl = GarrisonDatasoruceImpl;
