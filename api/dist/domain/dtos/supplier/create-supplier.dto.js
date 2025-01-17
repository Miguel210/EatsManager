"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSupplierDto = void 0;
const create_person_dto_1 = require("../person/create-person.dto");
class CreateSupplierDto {
    constructor(createPersonDto) {
        this.createPersonDto = createPersonDto;
    }
    static create(props) {
        const { genderId, profileId, typePersonId, fullname, username, password } = props;
        const [error, person] = create_person_dto_1.CreatePersonDto.create({ genderId, profileId, typePersonId, fullname, username, password });
        if (error)
            throw [error, undefined];
        return [undefined, new CreateSupplierDto(person)];
    }
}
exports.CreateSupplierDto = CreateSupplierDto;
