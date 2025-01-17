"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSupplierDto = void 0;
const update_person_dto_1 = require("../person/update-person.dto");
class UpdateSupplierDto {
    constructor(id, personId, IsActive, person) {
        this.id = id;
        this.personId = personId;
        this.IsActive = IsActive;
        this.person = person;
    }
    get values() {
        const returnObj = {};
        if (this.personId)
            returnObj.personId = this.personId;
        if (this.IsActive)
            returnObj.isActive = this.IsActive;
        return returnObj;
    }
    static create(props) {
        const { id, personId, isActive, fullname, username, password, genderId, profileId, typePersonId } = props;
        if (!id) {
            return ['id is requerid'];
        }
        if (!personId) {
            return ['personId no exist, is requerid'];
        }
        if (isActive === undefined) {
            return ['isActive must be validate'];
        }
        //todo this part is person
        const [error, updatePersonDto] = update_person_dto_1.UpdatePersonDto.create({ genderId, profileId, typePersonId, fullname, username, password });
        if (error)
            return [error];
        return [undefined, new UpdateSupplierDto(id, personId, isActive, updatePersonDto)];
    }
}
exports.UpdateSupplierDto = UpdateSupplierDto;
