"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmployeeDto = void 0;
const update_person_dto_1 = require("../person/update-person.dto");
class UpdateEmployeeDto {
    constructor(id, input, output, salary, isActive, person) {
        this.id = id;
        this.input = input;
        this.output = output;
        this.salary = salary;
        this.isActive = isActive;
        this.person = person;
    }
    static create(props) {
        const { id, input, output, salary, isActive, genderId, profileId, typePersonId, fullname, username, password } = props;
        if (!id)
            return ['Requerid id'];
        if (!input)
            return ['Requerid input'];
        if (!output)
            return ['Requerid output'];
        if (!salary)
            return ['Requerid salary'];
        if (isActive === undefined)
            return ['Requerid isActive'];
        const [error, person] = update_person_dto_1.UpdatePersonDto.create({ id: '', genderId, profileId, typePersonId, fullname, username, password });
        if (error)
            throw [error, undefined];
        return [undefined, new UpdateEmployeeDto(id, input, output, salary, isActive, person)];
    }
}
exports.UpdateEmployeeDto = UpdateEmployeeDto;
