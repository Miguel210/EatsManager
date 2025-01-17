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
exports.InventoryDatasourceImpl = void 0;
const config_1 = require("../../../config");
const data_1 = require("../../../data");
const inventory_entity_1 = require("../../../domain/entities/inventory.entity");
class InventoryDatasourceImpl {
    create(createInventoryDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const inventory = yield data_1.prisma.inventory.create({
                data: {
                    id: config_1.Uuid.uuid(),
                    movementId: createInventoryDto.movementId,
                    productId: createInventoryDto.product,
                    quantity: createInventoryDto.quantity
                }
            });
            if (!inventory)
                throw `Inventory no created`;
            return inventory_entity_1.InventoryEntity.fromObject(inventory);
        });
    }
    getAll(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            //const date: Date[] = [new Date(obj.date)] 
            const inventories = data_1.prisma.inventory.findMany({
                where: {
                    product: {
                        categoryId: {
                            in: obj.category || undefined
                        },
                        code: {
                            in: obj.code || undefined
                        },
                        productTypeId: {
                            in: obj.productType || undefined
                        },
                        description: {
                            in: obj.description || undefined
                        },
                    },
                    movement: {
                        date: obj.date || undefined
                    }
                },
                include: {
                    product: {
                        select: {
                            description: true,
                            code: true,
                            category: true,
                            productType: {
                                select: {
                                    description: true
                                }
                            }
                        }
                    },
                    movement: {
                        select: {
                            document: {
                                select: {
                                    description: true,
                                    folio: true
                                }
                            },
                            supplierOrders: {
                                select: {
                                    id: true,
                                    invoiceFolio: true,
                                    paymentDate: true,
                                    isActive: true,
                                    status: true
                                }
                            },
                        }
                    }
                }
            });
            return (yield inventories).map(inventory => inventory_entity_1.InventoryEntity.fromObject(inventory));
        });
    }
}
exports.InventoryDatasourceImpl = InventoryDatasourceImpl;
