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
exports.ModuleDatasourceImpl = void 0;
const module_enity_1 = require("../../../domain/entities/module.enity");
const data_1 = require("../../../data");
class ModuleDatasourceImpl {
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const ids = id;
            const module = yield data_1.prisma.module.findMany({
                // include: {
                //     operations: {
                //         where: {
                //             profiles: {
                //                 some: {
                //                     profileId: ids,
                //                 },
                //             },
                //         },
                //     },
                // }
                where: {
                    operations: {
                        some: {
                            profiles: {
                                some: {
                                    profileId: ids
                                }
                            }
                        }
                    }
                },
                select: {
                    id: true,
                    name: true
                }
            });
            if (!module)
                throw `Todo with id ${id} not found`;
            return module.map(module => module_enity_1.ModuleEntity.fromObject(module));
        });
    }
}
exports.ModuleDatasourceImpl = ModuleDatasourceImpl;
/*
select md.id, md."name"  from module as md
JOIN operation as op on op."moduleId"=md.id
JOIN "profileOperation" as po on po."operationId"=op."id"
JOIN profile as pr on pr.id=po."profileId"
JOIN person as per on per."profileId"=pr.id
where per.id='1' GROUP by md.id
*/ 
