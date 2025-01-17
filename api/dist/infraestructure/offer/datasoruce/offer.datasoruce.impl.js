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
exports.OfferDatasourceImpl = void 0;
const config_1 = require("../../../config");
const data_1 = require("../../../data");
const offer_entity_1 = require("../../../domain/entities/offer.entity");
class OfferDatasourceImpl {
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const promotion = yield data_1.prisma.promotion.create({
                data: {
                    id: config_1.Uuid.uuid(),
                    productId: dto.productId,
                    price: dto.price,
                    from: dto.from,
                    until: dto.until,
                    isActive: dto.isActive
                }
            });
            if (!promotion)
                throw `Promotion with data ${dto} not found`;
            return offer_entity_1.OfferEntity.fromObject(promotion);
        });
    }
    getOfferbyId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const promotion = yield data_1.prisma.promotion.findFirst({
                where: {
                    id: id,
                    isDelete: false
                },
                select: {
                    id: true,
                    product: {
                        select: {
                            description: true
                        }
                    },
                    price: true,
                    from: true,
                    until: true,
                    isActive: true
                }
            });
            if (!promotion)
                throw `Promotion with id ${id} not found`;
            return offer_entity_1.OfferEntity.fromObject(promotion);
        });
    }
    getOffers(form) {
        return __awaiter(this, void 0, void 0, function* () {
            let from = form.from;
            if (!from) {
                from = undefined;
            }
            else {
                from = new Date(from);
            }
            const promotion = yield data_1.prisma.promotion.findMany({
                where: {
                    isDelete: false,
                    productId: {
                        in: form.productId || undefined,
                    },
                    from: from,
                    isActive: form.isActive
                },
                select: {
                    id: true,
                    product: {
                        select: {
                            id: true,
                            description: true
                        }
                    },
                    price: true,
                    from: true,
                    until: true,
                    isActive: true
                }
            });
            if (!promotion)
                throw `Promotion with data ${form} not found`;
            return promotion.map(promotion => offer_entity_1.OfferEntity.fromObject(promotion));
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOfferbyId(dto.id);
            const promotion = yield data_1.prisma.promotion.update({
                where: {
                    id: dto.id
                },
                data: {
                    productId: dto.productId,
                    price: dto.price,
                    from: new Date(dto.from),
                    until: new Date(dto.until),
                    isActive: dto.isActive
                }
            });
            if (!promotion)
                throw `Promotion with data ${dto} not found`;
            return offer_entity_1.OfferEntity.fromObject(promotion);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOfferbyId(id);
            const promotion = yield data_1.prisma.promotion.update({
                where: {
                    id: id
                },
                data: {
                    isDelete: true,
                    deleteAt: new Date()
                }
            });
            if (!promotion)
                throw `Promotion with id ${id} not found`;
            return offer_entity_1.OfferEntity.fromObject(promotion);
        });
    }
}
exports.OfferDatasourceImpl = OfferDatasourceImpl;
