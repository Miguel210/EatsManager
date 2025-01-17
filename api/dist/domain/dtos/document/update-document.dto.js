"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDocumentDto = void 0;
class UpdateDocumentDto {
    constructor(id, description, isActive, folio) {
        this.id = id;
        this.description = description;
        this.isActive = isActive;
        this.folio = folio;
    }
    static create(props) {
        const { id, description, isActive, folio } = props;
        if (!id)
            throw ['id is requerid'];
        if (!description)
            throw ['Description is requerid'];
        if (isActive === undefined)
            throw ['isActive is requerid'];
        if (!folio)
            throw ['folio is requerid'];
        return [undefined, new UpdateDocumentDto(id, description, isActive, folio)];
    }
}
exports.UpdateDocumentDto = UpdateDocumentDto;
