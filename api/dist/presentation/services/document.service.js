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
exports.DocumentService = void 0;
const create_document_1 = require("../../domain/use-cases/document/create-document");
const get_document_1 = require("../../domain/use-cases/document/get-document");
const getAll_document_1 = require("../../domain/use-cases/document/getAll-document");
const update_document_1 = require("../../domain/use-cases/document/update-document");
const delete_document_1 = require("../../domain/use-cases/document/delete-document");
const domain_1 = require("../../domain");
class DocumentService {
    constructor(repository) {
        this.repository = repository;
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const document = yield new create_document_1.CreateDocument(this.repository).execute(dto)
                .then(doc => doc)
                .catch(error => console.log({ error }));
            if (!document)
                throw domain_1.CustomError.badRequest('Error data');
            return {
                data: document
            };
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const document = yield new get_document_1.GetDocument(this.repository).execute(id)
                .then(doc => doc)
                .catch(error => console.log({ error }));
            if (!document)
                throw domain_1.CustomError.badRequest('Error data');
            return {
                data: document
            };
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const document = yield new getAll_document_1.GetAllDocument(this.repository).execute(form)
                .then(doc => doc)
                .catch(error => console.log({ error }));
            if (!document)
                throw domain_1.CustomError.badRequest('Error data');
            return {
                data: document
            };
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const document = yield new update_document_1.UpdateDocument(this.repository).execute(dto)
                .then(doc => doc)
                .catch(error => console.log({ error }));
            if (!document)
                throw domain_1.CustomError.badRequest('Error data');
            return {
                data: document
            };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const document = yield new delete_document_1.DeleteDocument(this.repository).execute(id)
                .then(doc => doc)
                .catch(error => console.log({ error }));
            if (!document)
                throw domain_1.CustomError.badRequest('Error data');
            return {
                data: document
            };
        });
    }
}
exports.DocumentService = DocumentService;
