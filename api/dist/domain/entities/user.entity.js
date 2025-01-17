"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class UserEntity {
    constructor(id, fullname, username, password, isActive, profileId, typeperson) {
        this.id = id;
        this.fullname = fullname;
        this.username = username;
        this.password = password;
        this.isActive = isActive;
        this.profileId = profileId;
        this.typeperson = typeperson;
    }
    static fromObject(object) {
        const { id, fullname, username, password, profileId, typeperson, isActive } = object;
        // , profile, typeperson
        if (!id) {
            throw custom_error_1.CustomError.badRequest('Missing id');
        }
        if (!fullname)
            throw custom_error_1.CustomError.badRequest('Missing fullname');
        if (!username)
            throw custom_error_1.CustomError.badRequest('Missing username!!!');
        if (!password)
            throw custom_error_1.CustomError.badRequest('Missing password');
        if (!profileId === undefined)
            throw custom_error_1.CustomError.badRequest('Missing profile');
        if (!typeperson)
            throw custom_error_1.CustomError.badRequest('Missing type Person');
        if (isActive == false)
            throw custom_error_1.CustomError.badRequest('Missing Exist');
        return new UserEntity(id, fullname, username, password, isActive, profileId, typeperson);
        // , profile,typeperson
    }
}
exports.UserEntity = UserEntity;
