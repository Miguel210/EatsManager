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
exports.ProfileOperationDatasourceImpl = void 0;
const data_1 = require("../../../data");
const profileOperation_entity_1 = require("../../../domain/entities/profileOperation.entity");
class ProfileOperationDatasourceImpl {
    find(moduleName, profileId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(moduleName);
            console.log(profileId);
            const profileoperation = yield data_1.prisma.profileOperation.findMany({
                where: {
                    profileId: profileId,
                    operation: {
                        module: {
                            name: moduleName
                        }
                    }
                },
                include: {
                    operation: {
                        select: {
                            name: true,
                            module: true
                        },
                    }
                }
            });
            if (!profileoperation)
                throw `Todo with id ${moduleName} not found`;
            //console.log(JSON.stringify(profileoperation));
            //console.log(profileoperation);
            // console.log("id");
            // console.log(profileoperation);
            // console.log("id");
            return profileoperation.map(profileoperation => profileOperation_entity_1.ProfileOperationEntity.fromObject(profileoperation));
            //return ProfileOperationEntity.fromObject(profileoperation)
        });
    }
}
exports.ProfileOperationDatasourceImpl = ProfileOperationDatasourceImpl;
