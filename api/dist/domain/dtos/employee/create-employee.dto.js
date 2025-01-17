"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmployeeDto = void 0;
const create_person_dto_1 = require("../person/create-person.dto");
class CreateEmployeeDto {
    constructor(person, input, output, salary, isActive) {
        this.person = person;
        this.input = input;
        this.output = output;
        this.salary = salary;
        this.isActive = isActive;
    }
    static create(props) {
        const { genderId, profileId, typePersonId, fullname, username, password, input, output, salary, isActive } = props;
        console.log(props);
        const [error, person] = create_person_dto_1.CreatePersonDto.create({ genderId, profileId, typePersonId, fullname, username, password });
        if (error)
            throw [error, undefined];
        if (!person)
            return ['Requerid personId'];
        if (!input)
            return ['Requerid input'];
        if (!output)
            return ['Requerid output'];
        if (!salary)
            return ['Requerid salary'];
        if (isActive === undefined)
            return ['Requerid isActive'];
        return [undefined, new CreateEmployeeDto(person, input, output, salary, isActive)];
    }
}
exports.CreateEmployeeDto = CreateEmployeeDto;
