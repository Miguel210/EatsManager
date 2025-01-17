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
exports.SupplierDatasoruceImpl = void 0;
const config_1 = require("../../../config");
const data_1 = require("../../../data");
const supplier_entity_1 = require("../../../domain/entities/supplier.entity");
class SupplierDatasoruceImpl {
    create(createSupplierDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = config_1.Uuid.uuid();
            const supplier = yield data_1.prisma.supplier.create({
                data: {
                    id: id,
                    person: {
                        create: {
                            id: config_1.Uuid.uuid(),
                            genderId: createSupplierDto.createPersonDto.genderId,
                            profileId: createSupplierDto.createPersonDto.profileId,
                            typePersonId: createSupplierDto.createPersonDto.typePersonId,
                            fullname: createSupplierDto.createPersonDto.fullname,
                            username: createSupplierDto.createPersonDto.username,
                            password: createSupplierDto.createPersonDto.password,
                        }
                    }
                },
                include: {
                    person: true
                }
            });
            if (!supplier)
                throw `Supplier no created`;
            return supplier_entity_1.SupplierEntity.fromObj(supplier);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const suppliers = yield data_1.prisma.supplier.findMany({
                select: {
                    id: true,
                    personId: true,
                    person: {
                        select: {
                            fullname: true,
                            typeperson: {
                                select: {
                                    description: true
                                }
                            },
                            isActive: true
                        }
                    },
                    isActive: true
                }
            });
            return suppliers.map(supplier => supplier_entity_1.SupplierEntity.fromObj(supplier));
        });
    }
    findbyId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const supplier = yield data_1.prisma.supplier.findFirst({
                where: {
                    id: id.toString()
                },
                select: {
                    id: true,
                    personId: true,
                    isActive: true,
                    person: {
                        select: {
                            fullname: true,
                            genderId: true,
                            typePersonId: true,
                            profileId: true,
                        }
                    },
                }
            });
            if (!supplier)
                throw `Supplier with id ${id} not found`;
            return supplier_entity_1.SupplierEntity.fromObj(supplier);
        });
    }
    updateById(updateSupplierDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findbyId(updateSupplierDto.id);
            const isActive = updateSupplierDto.IsActive;
            const updateSupplier = yield data_1.prisma.supplier.update({
                where: {
                    id: updateSupplierDto.id
                },
                data: {
                    isActive: isActive,
                    person: {
                        update: {
                            genderId: updateSupplierDto.person.genderId,
                            fullname: updateSupplierDto.person.fullname,
                            isActive: isActive
                        }
                    }
                },
                include: {
                    person: true
                }
            });
            return supplier_entity_1.SupplierEntity.fromObj(updateSupplier);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findbyId(id);
            const deleted = yield data_1.prisma.supplier.delete({
                where: { id }
            });
            console.log('paso por aqui');
            console.log(deleted);
            return supplier_entity_1.SupplierEntity.fromObj(deleted);
        });
    }
}
exports.SupplierDatasoruceImpl = SupplierDatasoruceImpl;
