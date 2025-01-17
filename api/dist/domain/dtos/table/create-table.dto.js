"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableDto = void 0;
class CreateTableDto {
    constructor(description, status, mainTable) {
        this.description = description;
        this.status = status;
        this.mainTable = mainTable;
    }
    static create(props) {
        const { description, status, mainTable } = props;
        if (!description)
            return ['description is requerid'];
        if (!status)
            return ['status is requerid'];
        return [undefined, new CreateTableDto(description, status, mainTable)];
    }
}
exports.CreateTableDto = CreateTableDto;
