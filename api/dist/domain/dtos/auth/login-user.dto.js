"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserDto = void 0;
class LoginUserDto {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    static login(object) {
        const { username, password } = object;
        if (!username)
            return ['Missing username'];
        if (!password)
            return ['Missing password'];
        if (password.length < 5)
            return ['Password too short'];
        return [undefined, new LoginUserDto(username, password)];
    }
}
exports.LoginUserDto = LoginUserDto;
