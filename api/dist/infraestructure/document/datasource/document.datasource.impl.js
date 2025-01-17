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
exports.DocuemntDatasourceImpl = void 0;
const config_1 = require("../../../config");
const data_1 = require("../../../data");
const document_entity_1 = require("../../../domain/entities/document.entity");
class DocuemntDatasourceImpl {
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const document = yield data_1.prisma.document.create({
                data: {
                    id: config_1.Uuid.uuid(),
                    description: dto.description,
                    isActive: dto.isActive,
                    folio: dto.folio
                }
            });
            if (!document)
                throw `Document with data ${dto} not found`;
            return document_entity_1.DocumentEntity.fromObject(document);
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const document = yield data_1.prisma.document.findFirst({
                where: {
                    id: id,
                    isDelete: false
                }
            });
            if (!document)
                throw `Document with id ${id} not found`;
            return document_entity_1.DocumentEntity.fromObject(document);
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const document = yield data_1.prisma.document.findMany({
                where: {
                    isActive: form.isActive,
                    isDelete: false
                }
            });
            if (!document)
                throw `Document with form ${form} not found`;
            return document.map(document => document_entity_1.DocumentEntity.fromObject(document));
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.get(dto.id);
            const document = yield data_1.prisma.document.update({
                where: {
                    id: dto.id,
                    isDelete: false
                },
                data: {
                    description: dto.description,
                    isActive: dto.isActive,
                    folio: {
                        increment: 1
                    }
                }
            });
            if (!document)
                throw `Document with id ${dto.id} not found`;
            return document_entity_1.DocumentEntity.fromObject(document);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id);
            yield this.get(id);
            const document = yield data_1.prisma.document.update({
                where: {
                    id: id
                },
                data: {
                    isDelete: true,
                    deleteAt: new Date()
                }
            });
            if (!document)
                throw `Document with id ${id} not found`;
            return document_entity_1.DocumentEntity.fromObject(document);
        });
    }
}
exports.DocuemntDatasourceImpl = DocuemntDatasourceImpl;
