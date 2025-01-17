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
exports.ProductDatasourceImpl = void 0;
const config_1 = require("../../../config");
const data_1 = require("../../../data");
const product_entity_1 = require("../../../domain/entities/product.entity");
class ProductDatasourceImpl {
    create(createProductDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield data_1.prisma.product.create({
                data: {
                    id: config_1.Uuid.uuid(),
                    code: createProductDto.code,
                    description: createProductDto.description,
                    existence: createProductDto.existence,
                    price: createProductDto.price,
                    productTypeId: createProductDto.productTypeId,
                    categoryId: createProductDto.categoryId,
                    viewMenu: createProductDto.viewMenu,
                    isActive: createProductDto.isActive,
                    image: createProductDto.image,
                },
            });
            if (!product)
                throw `Product with the datas: ${product} not create`;
            return product_entity_1.ProductEntity.fromObject(product);
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(form);
            const products = yield data_1.prisma.product.findMany({
                where: {
                    isDelete: false,
                    categoryId: {
                        in: form.category || undefined,
                    },
                    code: {
                        in: form.code || undefined,
                    },
                    productTypeId: {
                        in: form.productType || undefined,
                    },
                    description: {
                        in: form.description || undefined,
                    },
                    isActive: form.isActive,
                    viewMenu: form.viewMenu,
                },
                include: {
                    productType: {
                        select: {
                            description: true,
                        },
                    },
                    category: {
                        select: {
                            categoryName: true,
                        },
                    },
                },
            });
            //console.log(products);
            return products.map((product) => product_entity_1.ProductEntity.fromObject(product));
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield data_1.prisma.product.findFirst({
                where: {
                    id: id,
                    isDelete: false,
                },
                include: {
                    productType: {
                        select: {
                            id: true,
                            description: true,
                            useStock: true,
                        },
                    },
                    category: {
                        select: {
                            id: true,
                            categoryName: true,
                        },
                    },
                },
            });
            if (!product)
                throw `Product with id ${id} not found`;
            return product_entity_1.ProductEntity.fromObject(product);
        });
    }
    updateById(updateProductDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(updateProductDto.id);
            const product = yield data_1.prisma.product.update({
                where: {
                    id: updateProductDto.id,
                },
                data: {
                    code: updateProductDto.code,
                    description: updateProductDto.description,
                    existence: updateProductDto.existence,
                    price: updateProductDto.price,
                    productTypeId: {
                        set: updateProductDto.productTypeId,
                    },
                    categoryId: {
                        set: updateProductDto.categoryId,
                    },
                    viewMenu: updateProductDto.viewMenu,
                    isActive: updateProductDto.isActive,
                    image: updateProductDto.image,
                },
            });
            console.log(product);
            return product_entity_1.ProductEntity.fromObject(product);
        });
    }
    updateQuantity(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const { quantity, id } = form;
            let data;
            if (quantity >= 0) {
                data = { increment: quantity };
            }
            else {
                const negative = quantity * -1;
                data = { decrement: negative };
            }
            const productUpd = yield data_1.prisma.product.update({
                where: {
                    id: id,
                },
                data: {
                    existence: data,
                },
            });
            // console.log('8888888888888');
            // console.log(productUpd);
            // console.log('8888888888888');
            if (!productUpd)
                throw `Product with id ${id} not found`;
            return product_entity_1.ProductEntity.fromObject(productUpd);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(id);
            const product = yield data_1.prisma.product.update({
                where: {
                    id: id,
                },
                data: {
                    isDelete: true,
                    deleteAt: new Date(),
                },
            });
            return product_entity_1.ProductEntity.fromObject(product);
        });
    }
}
exports.ProductDatasourceImpl = ProductDatasourceImpl;
