"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jwt_adapter_1 = require("../../config/jwt.adapter");
const domain_1 = require("../../domain");
const user_entity_1 = require("../../domain/entities/user.entity");
const get_auth_1 = require("../../domain/use-cases/auth/get-auth");
class AuthService {
    constructor(authrepository) {
        this.authrepository = authrepository;
    }
    loginUser(loginUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield new get_auth_1.GetAuth(this.authrepository).execute(loginUserDto.username)
                .then(user => user)
                .catch(error => error);
            if (!user)
                throw domain_1.CustomError.badRequest('Username already exist');
            //todo isMatching the passwod
            //todo Create token
            const token = yield jwt_adapter_1.JwtAdapter.generateToken({ id: user.id });
            if (!token)
                throw domain_1.CustomError.internalServer('Error wile creating JWT');
            //todo Create modules
            const _a = user_entity_1.UserEntity.fromObject(user), { password } = _a, userEntity = __rest(_a, ["password"]);
            /*const [error, moduleDto] =  ModulesDto.modules(userEntity);
            if(error) throw CustomError.badRequest(error)*/
            //const modulos = await this.modulesUser(moduleDto!)
            //! Repair this map | any type modulo
            // const moduloEntity = modulos.map((modulo: any) => ModuleEntity.fromObject(modulo!))
            return {
                user: userEntity,
                token: token,
            };
        });
    }
    /*public async modulesUser(moduleDto: ModulesDto){
        return await new GetsModule(this.moduleRepository).execute(moduleDto.id)
        .then(module => module)
        .catch( error => error)
    }*/
    operationsModule(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                data
            };
        });
    }
}
exports.AuthService = AuthService;
