"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePersonDto = void 0;
class UpdatePersonDto {
    constructor(id, genderId, profileId, typePersonId, fullname, username, password) {
        this.id = id;
        this.genderId = genderId;
        this.profileId = profileId;
        this.typePersonId = typePersonId;
        this.fullname = fullname;
        this.username = username;
        this.password = password;
    }
    static create(props) {
        let { id, genderId, profileId, typePersonId, fullname, username, password } = props;
        if (!fullname) {
            fullname = props.person.fullname;
            if (props.person.id === undefined) {
                return ['id is requerid'];
            }
            else {
                id = props.person.id;
            }
        }
        if (!genderId)
            return ['genderId is requerid'];
        if (!profileId)
            return ['profileId is requerid'];
        if (!typePersonId)
            return ['typePersonId is requerid'];
        if (!fullname)
            return ['fullname is requerid'];
        return [undefined, new UpdatePersonDto(id, genderId, profileId, typePersonId, fullname, username, password)];
    }
}
exports.UpdatePersonDto = UpdatePersonDto;
