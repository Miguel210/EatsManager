"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentController = void 0;
const domain_1 = require("../../domain");
const create_document_dto_1 = require("../../domain/dtos/document/create-document.dto");
const update_document_dto_1 = require("../../domain/dtos/document/update-document.dto");
class DocumentController {
    constructor(service) {
        this.service = service;
        this.HandleError = (error, res) => {
            if (error instanceof (domain_1.CustomError)) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            console.log(`${error}`);
            return res.status(500).json({ error: 'Internal server error' });
        };
        this.create = (req, res) => {
            const [error, dto] = create_document_dto_1.CreateDocumentDto.create(req.body.document);
            if (error)
                throw res.status(400).json({ error });
            this.service.create(dto)
                .then(doc => res.json(doc))
                .catch(error => this.HandleError(error, res));
        };
        this.get = (req, res) => {
            const id = req.body.id;
            if (!id)
                throw res.status(400).json({ error: 'id is requerid' });
            this.service.get(id)
                .then(doc => res.json(doc))
                .catch(error => this.HandleError(error, res));
        };
        this.getAll = (req, res) => {
            const form = {
                isActive: req.body.isActive
            };
            this.service.getAll(form)
                .then(doc => res.json(doc))
                .catch(error => this.HandleError(error, res));
        };
        this.update = (req, res) => {
            const [error, dto] = update_document_dto_1.UpdateDocumentDto.create(Object.assign({ id: req.body.id }, req.body.document));
            if (error)
                throw res.status(400).json({ error });
            this.service.update(dto)
                .then(doc => res.json(doc))
                .catch(error => this.HandleError(error, res));
        };
        this.delete = (req, res) => {
            const id = req.body.id;
            if (!id)
                throw res.status(400).json({ error: 'id is requerid' });
            this.service.delete(id)
                .then(doc => res.json(doc))
                .catch(error => this.HandleError(error, res));
        };
    }
}
exports.DocumentController = DocumentController;
