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
exports.MovementDatasourceImpl = void 0;
const config_1 = require("../../../config");
const data_1 = require("../../../data");
const movement_entity_1 = require("../../../domain/entities/movement.entity");
const movementDetail_datasource_impl_1 = require("../../movementDetail/datasource/movementDetail.datasource.impl");
const create_movementDetail_1 = require("../../../domain/dtos/movementDetail/create-movementDetail");
const supplierOrder_datasource_impl_1 = require("../../supplierOrder/datasource/supplierOrder.datasource.impl");
const employee_datasource_impl_1 = require("../../employee/datasource/employee.datasource.impl");
const document_datasource_impl_1 = require("../../document/datasource/document.datasource.impl");
const inventory_datasource_impl_1 = require("../../inventory/datasource/inventory.datasource.impl");
const product_datasource_impl_1 = require("../../product/datasource/product.datasource.impl");
const clientOrder_datasource_impl_1 = require("../../clientOrder/datasource/clientOrder.datasource.impl");
class MovementDatasourceImpl {
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const employeeImpl = new employee_datasource_impl_1.EmployeeDatasourceImpl();
            const movementDetailImpl = new movementDetail_datasource_impl_1.MovementDetailDatasourceImpl();
            const docuemntDatasourceImpl = new document_datasource_impl_1.DocuemntDatasourceImpl();
            const inventoryDatasourceImpl = new inventory_datasource_impl_1.InventoryDatasourceImpl();
            const productDatasourceImpl = new product_datasource_impl_1.ProductDatasourceImpl();
            const form = {
                personId: [dto.elaborateId],
            };
            const elaborate = yield employeeImpl.gets(form);
            let movement;
            if (dto.isCreate === true) {
                console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
                console.log(dto);
                console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
                movement = yield data_1.prisma.movement.create({
                    data: {
                        id: config_1.Uuid.uuid(),
                        personId: dto.personId,
                        documentId: dto.documentId,
                        elaborateId: elaborate[0].id,
                        amount: dto.amount,
                        status: dto.status,
                        isActive: true,
                        referenceId: dto.referenceId || undefined,
                        date: new Date(),
                    }
                });
            }
            else {
                movement = Object.assign(Object.assign({}, dto), { id: dto.MovementDetailDto[0].movementId, date: new Date() });
            }
            if (!movement)
                throw `Movement with data ${dto} not created`;
            if (!Array.isArray(dto.MovementDetailDto)) {
                throw new Error('MovementDetailDto debe ser un arreglo');
            }
            // console.log(',,,,,,,,,,,,,,,,,,,,,,');
            // console.log(dto.MovementDetailDto);
            // console.log(',,,,,,,,,,,,,,,,,,,,,,');
            dto.MovementDetailDto
                .filter(e => e.isCreatemov === true)
                .map((e) => __awaiter(this, void 0, void 0, function* () {
                const [error, detailDto] = create_movementDetail_1.CreateMovementDetailDto.create(Object.assign(Object.assign({}, e), { movementId: movement.id }));
                if (error)
                    throw `Error CreateMovementDetailDto: ${error}`;
                movementDetailImpl.create(Object.assign({}, detailDto));
                inventoryDatasourceImpl.create({ movementId: movement.id, product: e.product.id, quantity: e.quantity });
                if (typeof e.quantity !== 'number') {
                    throw new Error('El valor de decrementAmount debe ser un número');
                }
                const product = yield productDatasourceImpl.findById(e.product.id);
                const objProduct = JSON.parse(JSON.stringify(product));
                // console.log(',,,,,,,,,,,,,,,,,,,,,,');
                const useStock = objProduct.productTypeId.useStock;
                // console.log(',,,,,,,,,,,,,,,,,,,,,,');
                if (useStock) {
                    productDatasourceImpl.updateQuantity({ id: e.product.id, quantity: e.quantity });
                }
                ;
            }));
            if (dto.extra === 'supplierOrder') {
                const order = new supplierOrder_datasource_impl_1.SupplierOrderDatasourceImpl();
                order.create(Object.assign(Object.assign({}, dto.SupplierOrderDto), { movementId: movement.id }));
                docuemntDatasourceImpl.update({ id: dto.documentId, folio: 1, isActive: true, description: 'Compra' });
            }
            if (dto.extra === 'clientOrder' && !dto.ClientOrderDto.id) {
                //! MODIICAR EL CLIENT ORDER
                const orderClient = new clientOrder_datasource_impl_1.ClientOrderDatasourceImpl();
                console.log('llllllllllllllllllllllllll');
                console.log(dto.ClientOrderDto);
                console.log('llllllllllllllllllllllllll');
                orderClient.create(Object.assign(Object.assign({}, dto.ClientOrderDto), { movementId: movement.id }));
            }
            return movement_entity_1.MovementEntity.fromObject(movement);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const movement = yield data_1.prisma.movement.findFirst({
                where: {
                    id: id
                },
                select: {
                    id: true,
                    person: {
                        select: {
                            id: true,
                            fullname: true
                        }
                    },
                    document: {
                        select: {
                            id: true,
                            description: true
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
                    elaborateId: true,
                    amount: true,
                    status: true,
                    isActive: true,
                    referenceId: true,
                    date: true,
                    movementDetail: {
                        select: {
                            id: true,
                            product: {
                                select: {
                                    id: true,
                                    description: true
                                }
                            },
                            quantity: true,
                            priceUnit: true,
                            subTotal: true,
                            tax: true,
                            total: true,
                            costUnit: true,
                        }
                    }
                }
            });
            if (!movement)
                throw `Movement with id ${id} not created`;
            return movement_entity_1.MovementEntity.fromObject(movement);
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const movement = yield data_1.prisma.movement.findMany({
                where: {
                    person: {
                        profileId: '0402cc9c-0992-4ad8-ab70-142522d2815f'
                    },
                    documentId: {
                        in: form.documentId || undefined
                    },
                    elaborateId: {
                        in: form.elaborateId || undefined
                    },
                    status: {
                        in: form.status || undefined
                    },
                    isActive: form.isActive,
                    date: form.date
                },
                select: {
                    id: true,
                    person: {
                        select: {
                            fullname: true
                        },
                    },
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
                    amount: true,
                    status: true,
                    isActive: true,
                    date: true,
                    employees: {
                        select: {
                            person: {
                                select: {
                                    fullname: true
                                }
                            }
                        }
                    },
                }
            });
            if (!movement)
                throw `Movements with form ${form} not found`;
            return movement.map(movement => movement_entity_1.MovementEntity.fromObject(movement));
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getById(dto.id);
            console.log(dto);
            const movement = yield data_1.prisma.movement.update({
                where: {
                    id: dto.id
                },
                data: {
                    amount: dto.amout,
                    status: dto.status,
                    isActive: dto.isActive,
                }
            });
            if (!movement)
                throw `Movements with id ${dto.id} not found`;
            const detail = new movementDetail_datasource_impl_1.MovementDetailDatasourceImpl();
            const order = new supplierOrder_datasource_impl_1.SupplierOrderDatasourceImpl();
            order.update(Object.assign(Object.assign({}, dto.supplierOrders[0]), { status: dto.status }));
            dto.movementDetailDto.filter(e => !e.id).map(e => {
                const [error, detailDto] = create_movementDetail_1.CreateMovementDetailDto.create(Object.assign(Object.assign({}, e), { productId: e.product.id, movementId: dto.id }));
                if (error)
                    throw `Error createMovementDetailDto`;
                detail.create(detailDto);
            });
            dto.movementDetailDto.filter(e => e.id).map(e => {
                detail.update(Object.assign(Object.assign({}, e), { productId: e.product.id }));
            });
            return movement_entity_1.MovementEntity.fromObject(movement);
        });
    }
}
exports.MovementDatasourceImpl = MovementDatasourceImpl;
