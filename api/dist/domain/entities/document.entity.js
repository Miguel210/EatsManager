"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class DocumentEntity {
    constructor(id, description, isActive, folio) {
        this.id = id;
        this.description = description;
        this.isActive = isActive;
        this.folio = folio;
    }
    static fromObject(object) {
        const { id, isActive, description, folio } = object;
        if (!id)
            throw custom_error_1.CustomError.badRequest('Missing id');
        if (isActive === undefined)
            throw custom_error_1.CustomError.badRequest('Missing isActive');
        if (!description)
            throw custom_error_1.CustomError.badRequest('Missing description');
        if (!folio)
            throw custom_error_1.CustomError.badRequest('Missing folio');
        return new DocumentEntity(id, description, isActive, folio);
    }
}
exports.DocumentEntity = DocumentEntity;
