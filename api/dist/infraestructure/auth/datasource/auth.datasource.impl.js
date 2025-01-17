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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthDatasourceImpl = void 0;
const user_entity_1 = require("../../../domain/entities/user.entity");
const data_1 = require("../../../data");
class AuthDatasourceImpl {
    findByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(username);
            const user = yield data_1.prisma.person.findFirst({
                where: {
                    username: username
                },
                include: {
                    profile: {
                        select: {
                            id: true
                        }
                    },
                    typeperson: {
                        select: {
                            description: true
                        }
                    }
                }
            });
            if (!user)
                throw `Todo with Username ${username} not found`;
            return user_entity_1.UserEntity.fromObject(user);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield data_1.prisma.person.findFirst({
                where: {
                    id: id
                },
                include: {
                    profile: {
                        select: {
                            id: true
                        }
                    },
                    typeperson: {
                        select: {
                            description: true
                        }
                    }
                }
            });
            if (!user)
                throw `Todo with id ${user} not found`;
            return user_entity_1.UserEntity.fromObject(user);
        });
    }
}
exports.AuthDatasourceImpl = AuthDatasourceImpl;
