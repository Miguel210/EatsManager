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
exports.TableDatasourceImpl = void 0;
const config_1 = require("../../../config");
const data_1 = require("../../../data");
const table_entity_1 = require("../../../domain/entities/table.entity");
const clientOrder_datasource_impl_1 = require("../../clientOrder/datasource/clientOrder.datasource.impl");
const movement_datasource_impl_1 = require("../../movement/datasource/movement.datasource.impl");
class TableDatasourceImpl {
    finalizateclientOrderDataTable(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientOrderImpl = new clientOrder_datasource_impl_1.ClientOrderDatasourceImpl();
            if (dto.status === "Disponible/Vacia") {
                this.update(dto);
                dto.clientOrder.map((order) => __awaiter(this, void 0, void 0, function* () {
                    clientOrderImpl.update({
                        id: order.id,
                        paymentDate: order.paymentDate,
                        tableId: order.tableId,
                        status: 'Finalizado',
                        isActive: order.isActive,
                        CreateMovementDto: order.CreateMovementDto
                    });
                }));
            }
            return table_entity_1.TableEntity.fromObject(dto);
        });
    }
    PayclientOrderDataTable(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientOrderImpl = new clientOrder_datasource_impl_1.ClientOrderDatasourceImpl();
            dto.clientOrder.map((order) => __awaiter(this, void 0, void 0, function* () {
                if (order.status === "Pagado") {
                    clientOrderImpl.update(Object.assign({}, order));
                }
            }));
            return table_entity_1.TableEntity.fromObject(dto);
        });
    }
    clientOrderDataTable(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const movement = new movement_datasource_impl_1.MovementDatasourceImpl();
            // console.log('---------------------------------------------') ;
            // console.log(dto.clientOrder);
            // dto.clientOrder.map(order => console.log(order.movement));
            ``;
            // console.log('---------------------------------------------') ;
            // console.log(dto.clientOrder);
            // const clientOrder = new ClientOrderDatasourceImpl();
            // console.log('---------------------------------------------') ;
            dto.clientOrder.map((order) => __awaiter(this, void 0, void 0, function* () {
                // console.log(order.CreateMovementDto.MovementDetailDto)
                if (order.CreateMovementDto.personId.startsWith("CODESECRET-")) {
                    const separate = order.CreateMovementDto.personId.slice("CODESECRET-".length);
                    const person = yield data_1.prisma.person.create({
                        data: {
                            id: config_1.Uuid.uuid(),
                            genderId: "a674eeeb-cd0f-4794-a35b-e321b33344a0",
                            profileId: "17dc3357-85b3-403d-840d-fed63b1c5171",
                            typePersonId: "35c890e4-d191-4f93-97de-d3ea6984423f",
                            fullname: separate,
                            username: "",
                            password: "",
                            isActive: true,
                        },
                    });
                    order = Object.assign(Object.assign({}, order), { CreateMovementDto: Object.assign(Object.assign({}, order.CreateMovementDto), { personId: person.id }) });
                }
                yield movement.create(Object.assign(Object.assign({}, order.CreateMovementDto), { elaborateId: dto.elaborateId }));
            }));
            const table = this.update({
                id: dto.id,
                description: dto.description,
                status: dto.status,
                mainTable: dto.mainTable,
                isActive: dto.isActive,
                clientOrder: dto.clientOrder,
                elaborateId: dto.elaborateId,
            });
            console.log("--------------------CODESECRET-------------------------");
            console.log("TERMINADO");
            console.log("--------------------CODESECRET-------------------------");
            return table_entity_1.TableEntity.fromObject(dto);
        });
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const table = yield data_1.prisma.table.create({
                data: {
                    id: config_1.Uuid.uuid(),
                    description: dto.description,
                    status: dto.status,
                    mainTableId: dto.mainTable,
                },
            });
            if (!table)
                throw `Table no created`;
            return table_entity_1.TableEntity.fromObject(table);
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const table = yield data_1.prisma.table.findFirst({
                where: {
                    id: id,
                    isDelete: false,
                },
            });
            if (!table)
                throw `Table not found`;
            return table_entity_1.TableEntity.fromObject(table);
        });
    }
    getDataTable(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const table = yield data_1.prisma.table.findFirst({
                where: {
                    id: id,
                    isDelete: false,
                },
                select: {
                    id: true,
                    description: true,
                    status: true,
                    mainTableId: true,
                    isActive: true,
                    clientOrder: {
                        where: { NOT: { status: 'Finalizado' } },
                        select: {
                            id: true,
                            status: true,
                            paymentDate: true,
                            tableId: true,
                            invoiceFolio: true,
                            movement: {
                                select: {
                                    date: true,
                                    personId: true,
                                    id: true,
                                    amount: true,
                                    status: true,
                                    referenceId: true,
                                    person: {
                                        select: {
                                            id: true,
                                            fullname: true,
                                        },
                                    },
                                    documentId: true,
                                    elaborateId: true,
                                    movementDetail: {
                                        select: {
                                            movementId: true,
                                            productId: true,
                                            quantity: true,
                                            product: {
                                                select: {
                                                    id: true,
                                                    description: true,
                                                    price: true,
                                                    existence: true,
                                                },
                                            },
                                            priceUnit: true,
                                            subTotal: true,
                                            tax: true,
                                            total: true,
                                            costUnit: true,
                                            promotionId: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            });
            console.log(id);
            console.log("*****");
            console.log(table);
            if (!table)
                throw `Table not found`;
            return table_entity_1.TableEntity.fromObject(table);
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const table = yield data_1.prisma.table.findMany({
                where: {
                    isDelete: false,
                },
            });
            console.log("table");
            if (!table)
                throw `Table no created`;
            return table.map((e) => table_entity_1.TableEntity.fromObject(e));
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Esta es mi mesa" + dto);
            yield this.get(dto.id);
            const table = yield data_1.prisma.table.update({
                where: {
                    id: dto.id,
                },
                data: {
                    description: dto.description,
                    status: dto.status,
                    mainTableId: dto.mainTable,
                    isActive: dto.isActive,
                },
            });
            if (!table)
                throw `Table no created`;
            return table_entity_1.TableEntity.fromObject(table);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.get(id);
            const table = yield data_1.prisma.table.update({
                where: {
                    id: id,
                },
                data: {
                    isDelete: true,
                    deleteAt: new Date(),
                },
            });
            if (!table)
                throw `Table no created`;
            return table_entity_1.TableEntity.fromObject(table);
        });
    }
}
exports.TableDatasourceImpl = TableDatasourceImpl;
