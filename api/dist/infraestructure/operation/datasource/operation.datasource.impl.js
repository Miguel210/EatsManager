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
exports.OperationDatasourceImpl = void 0;
const data_1 = require("../../../data");
const operation_entity_1 = require("../../../domain/entities/operation.entity");
class OperationDatasourceImpl {
    getAllByProfile(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const operations = yield data_1.prisma.operation.findMany({
                include: {
                    profiles: {
                        where: {
                            profileId: id
                        }
                    },
                    module: {
                        include: {
                            operations: {}
                        }
                    }
                },
            });
            console.log(operations);
            if (!operations)
                throw `Operations with profileId ${id} not found`;
            return operations.map(operation => operation_entity_1.OperationEntity.fromObject(operations));
        });
    }
}
exports.OperationDatasourceImpl = OperationDatasourceImpl;
