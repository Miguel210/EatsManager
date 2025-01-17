"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileDto = void 0;
class ProfileDto {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static profile(object) {
        const { id, name, isActive } = object;
        if (!id)
            return ['Missing Id Profile'];
        if (!name)
            return ['Missing name profile'];
        if (isActive === false)
            return [' profile no active or no exist'];
        return [undefined, new ProfileDto(id, name)];
    }
}
exports.ProfileDto = ProfileDto;
