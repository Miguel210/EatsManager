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
exports.CategoryDatasourceImpl = void 0;
const config_1 = require("../../../config");
const data_1 = require("../../../data");
const category_entity_1 = require("../../../domain/entities/category.entity");
class CategoryDatasourceImpl {
    create(createCategoryDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield data_1.prisma.categoryProduct.create({
                data: {
                    id: config_1.Uuid.uuid(),
                    categoryName: createCategoryDto.categoryName,
                    isActive: createCategoryDto.isActive
                }
            });
            if (!category)
                throw `Category with the datas: ${category} not create`;
            return category_entity_1.CategoryEntity.fromObject(category);
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield data_1.prisma.categoryProduct.findMany({
                where: {
                    isDelete: false,
                    categoryName: {
                        in: form.categoryName || undefined
                    },
                    isActive: form.isActive,
                }
            });
            return categories.map(categories => category_entity_1.CategoryEntity.fromObject(categories));
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield data_1.prisma.categoryProduct.findFirst({
                where: {
                    id: id,
                    isDelete: false
                }
            });
            if (!category)
                throw `Category with id ${id} not found`;
            return category_entity_1.CategoryEntity.fromObject(category);
        });
    }
    update(updateCategoryDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.get(updateCategoryDto.id);
            const category = yield data_1.prisma.categoryProduct.update({
                where: {
                    id: updateCategoryDto.id
                },
                data: {
                    categoryName: updateCategoryDto.categoryName,
                    isActive: updateCategoryDto.isActive
                }
            });
            if (!category)
                throw `Category with id ${updateCategoryDto} not found`;
            return category_entity_1.CategoryEntity.fromObject(category);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.get(id);
            const category = yield data_1.prisma.categoryProduct.update({
                where: {
                    id: id
                },
                data: {
                    isDelete: true,
                    deleteAt: new Date()
                }
            });
            return category_entity_1.CategoryEntity.fromObject(category);
        });
    }
}
exports.CategoryDatasourceImpl = CategoryDatasourceImpl;
