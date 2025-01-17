"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePersonDto = void 0;
class CreatePersonDto {
    constructor(
    //public readonly id: string,
    genderId, profileId, typePersonId, fullname, username, password) {
        this.genderId = genderId;
        this.profileId = profileId;
        this.typePersonId = typePersonId;
        this.fullname = fullname;
        this.username = username;
        this.password = password;
    }
    static create(props) {
        const { genderId, profileId, typePersonId, username = '', password = '' } = props;
        console.log('1');
        console.log(props);
        console.log('1');
        const { id, fullname } = props.person;
        if (id)
            return ['id exist', undefined];
        if (!genderId)
            return ['genderId is requerid', undefined];
        if (!profileId)
            return ['genderId is requerid', undefined];
        if (!typePersonId)
            return ['genderId is requerid', undefined];
        if (!fullname)
            return ['genderId is requerid', undefined];
        return [undefined, new CreatePersonDto(genderId, profileId, typePersonId, fullname, username, password)];
    }
}
exports.CreatePersonDto = CreatePersonDto;
