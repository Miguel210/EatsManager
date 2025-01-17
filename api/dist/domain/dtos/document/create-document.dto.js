"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDocumentDto = void 0;
class CreateDocumentDto {
    constructor(description, isActive, folio) {
        this.description = description;
        this.isActive = isActive;
        this.folio = folio;
    }
    static create(props) {
        const { description, isActive, folio = 1 } = props;
        if (!description)
            throw ['Description is requerid'];
        if (isActive === undefined)
            throw ['isActive is requerid'];
        return [undefined, new CreateDocumentDto(description, isActive, folio)];
    }
}
exports.CreateDocumentDto = CreateDocumentDto;
