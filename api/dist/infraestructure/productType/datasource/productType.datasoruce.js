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
exports.ProductTypeDatasourceImpl = void 0;
const config_1 = require("../../../config");
const data_1 = require("../../../data");
const productType_entity_1 = require("../../../domain/entities/productType.entity");
class ProductTypeDatasourceImpl {
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const productType = yield data_1.prisma.productType.create({
                data: {
                    id: config_1.Uuid.uuid(),
                    description: dto.description,
                    useStock: dto.useStock,
                    isActive: dto.isActive
                }
            });
            if (!productType)
                throw `ProductType ${productType} not found`;
            return productType_entity_1.ProductTypeEntity.fromObject(productType);
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const types = yield data_1.prisma.productType.findMany({
                where: {
                    isDelete: false
                }
            });
            if (!types)
                throw `ProductType ${types} not found`;
            return types.map(types => productType_entity_1.ProductTypeEntity.fromObject(types));
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const type = yield data_1.prisma.productType.findFirst({
                where: {
                    id: id,
                    isDelete: false
                }
            });
            if (!type)
                throw `ProductType with ${id} not found`;
            return productType_entity_1.ProductTypeEntity.fromObject(type);
        });
    }
    updatebyId(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(dto.id);
            const type = yield data_1.prisma.productType.update({
                where: {
                    id: dto.id
                },
                data: {
                    description: dto.description,
                    useStock: dto.useStock,
                    isActive: dto.isActive
                }
            });
            if (!type)
                throw `ProductType with ${dto.id} not found`;
            return productType_entity_1.ProductTypeEntity.fromObject(type);
        });
    }
    deletebyId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const type = yield data_1.prisma.productType.update({
                where: {
                    id: id
                },
                data: {
                    isDelete: true,
                    deleteAt: new Date()
                }
            });
            if (!type)
                throw `ProductType with ${id} not found`;
            return productType_entity_1.ProductTypeEntity.fromObject(type);
        });
    }
}
exports.ProductTypeDatasourceImpl = ProductTypeDatasourceImpl;
