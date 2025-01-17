"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepositoryImpl = void 0;
class AuthRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    findByUsername(username) {
        return this.datasource.findByUsername(username);
    }
}
exports.AuthRepositoryImpl = AuthRepositoryImpl;
