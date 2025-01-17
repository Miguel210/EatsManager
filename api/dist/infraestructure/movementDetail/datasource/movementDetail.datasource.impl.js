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
exports.MovementDetailDatasourceImpl = void 0;
const config_1 = require("../../../config");
const data_1 = require("../../../data");
const movementDetail_entity_1 = require("../../../domain/entities/movementDetail.entity");
class MovementDetailDatasourceImpl {
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const movement = yield data_1.prisma.movementDetail.create({
                data: {
                    id: config_1.Uuid.uuid(),
                    movementId: dto.movementId,
                    quantity: dto.quantity,
                    productId: dto.productId,
                    priceUnit: dto.priceUnit,
                    subTotal: dto.subTotal,
                    tax: dto.tax,
                    total: dto.total,
                    costUnit: dto.costUnit,
                    promotionId: dto.promotionId
                }
            });
            if (!movement)
                throw `movementDetail with data ${dto} not found`;
            return movementDetail_entity_1.MovementDetailEntity.fromObject(movement);
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const movement = yield data_1.prisma.movementDetail.findFirst({
                where: {
                    id: id
                }
            });
            if (!movement)
                throw `movementDetail with id ${id} not found`;
            return movementDetail_entity_1.MovementDetailEntity.fromObject(movement);
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const movement = yield data_1.prisma.movementDetail.findMany({
                where: {
                    isActive: form.isActive,
                    productId: {
                        in: form.productId || undefined
                    },
                },
                select: {
                    id: true,
                    movement: {
                        select: {
                            document: {
                                select: {
                                    description: true,
                                    folio: true
                                }
                            }
                        }
                    },
                    quantity: true,
                    product: {
                        select: {
                            description: true
                        }
                    },
                    priceUnit: true,
                    subTotal: true,
                    tax: true,
                    total: true,
                    costUnit: true,
                    promotionId: true,
                    isActive: true
                }
            });
            if (!movement)
                throw `movementDetail with form ${form} not found`;
            return movement.map(movement => movementDetail_entity_1.MovementDetailEntity.fromObject(movement));
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.get(dto.id);
            const movement = yield data_1.prisma.movementDetail.update({
                where: {
                    id: dto.id
                },
                data: {
                    productId: dto.product.id,
                    quantity: dto.quantity,
                    priceUnit: dto.priceUnit,
                    subTotal: dto.subTotal,
                    tax: dto.tax,
                    total: dto.total,
                    costUnit: dto.costUnit,
                    isActive: dto.isActive
                }
            });
            if (!movement)
                throw `movementDetail with id ${dto.id} not found`;
            return movementDetail_entity_1.MovementDetailEntity.fromObject(movement);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const movement = yield data_1.prisma.movementDetail.update({
                where: {
                    id: id
                },
                data: {
                /*isDelete: true,
                deleteAt: new Date()*/
                }
            });
            if (!movement)
                throw `movementDetail with id ${id} not found`;
            return movementDetail_entity_1.MovementDetailEntity.fromObject(movement);
        });
    }
}
exports.MovementDetailDatasourceImpl = MovementDetailDatasourceImpl;
