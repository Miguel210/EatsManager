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
exports.AuthMiddlewares = void 0;
const jwt_adapter_1 = require("../../config/jwt.adapter");
const auth_datasource_impl_1 = require("../../infraestructure/auth/datasource/auth.datasource.impl");
const user_entity_1 = require("../../domain/entities/user.entity");
const module_datasource_impl_1 = require("../../infraestructure/module/datasource/module.datasource.impl");
const profileOperation_datasource_impl_1 = require("../../infraestructure/profileOperation/datasource/profileOperation.datasource.impl");
class AuthMiddlewares {
    static validateJWT(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const module = req.params.module || '';
            const authorization = req.header('Authorization');
            if (!authorization)
                return res.status(401).json({ error: 'No token provided' });
            if (!authorization.startsWith('Bearer'))
                return res.status(401).json({ error: 'Invalid Bearer token' });
            const token = authorization.split(' ').at(1) || '';
            try {
                const payload = yield jwt_adapter_1.JwtAdapter.validateToken(token);
                if (!payload)
                    return res.status(401).json({ error: 'Invalid token' });
                const user = yield new auth_datasource_impl_1.AuthDatasourceImpl().findById(payload.id);
                if (!user)
                    return res.status(401).json({ error: 'Invalid token - user' });
                const _a = user_entity_1.UserEntity.fromObject(user), { password } = _a, userEntity = __rest(_a, ["password"]);
                req.body.user = userEntity;
                //console.log(req.body.user);
                const module = yield new module_datasource_impl_1.ModuleDatasourceImpl().findById(userEntity.profileId);
                // console.log(req.params.module);
                const operation = yield new profileOperation_datasource_impl_1.ProfileOperationDatasourceImpl().find(req.params.module, userEntity.profileId);
                req.body._meta = {
                    module,
                    operation,
                    id: userEntity.profileId,
                    userId: userEntity.id
                };
                next();
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
}
exports.AuthMiddlewares = AuthMiddlewares;
