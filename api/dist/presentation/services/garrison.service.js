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
exports.GarrisonService = void 0;
const create_garrison_1 = require("../../domain/use-cases/garrison/create-garrison");
const delete_garrison_1 = require("../../domain/use-cases/garrison/delete-garrison");
const get_garrison_1 = require("../../domain/use-cases/garrison/get-garrison");
const get_garrisons_1 = require("../../domain/use-cases/garrison/get-garrisons");
const update_garrison_1 = require("../../domain/use-cases/garrison/update-garrison");
class GarrisonService {
    constructor(repository) {
        this.repository = repository;
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const garrison = yield new create_garrison_1.CreateGarrison(this.repository).execute(dto)
                .then(garrison => garrison)
                .catch(error => console.log({ error }));
            return {
                data: {
                    garrison
                }
            };
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const garrison = yield new get_garrison_1.GetGarrison(this.repository).execute(id)
                .then(garrison => garrison)
                .catch(error => console.log({ error }));
            return {
                data: {
                    garrison
                }
            };
        });
    }
    getAll(dishId) {
        return __awaiter(this, void 0, void 0, function* () {
            const garrison = yield new get_garrisons_1.GetGarrisons(this.repository).execute(dishId)
                .then(garrison => garrison)
                .catch(error => console.log({ error }));
            return {
                data: {
                    garrison
                }
            };
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const garrison = yield new update_garrison_1.UpdateGarrison(this.repository).execute(dto)
                .then(garrison => garrison)
                .catch(error => console.log({ error }));
            return {
                data: {
                    garrison
                }
            };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const garrison = yield new delete_garrison_1.DeleteGarrison(this.repository).execute(id)
                .then(garrison => garrison)
                .catch(error => console.log({ error }));
            return {
                data: {
                    garrison
                }
            };
        });
    }
}
exports.GarrisonService = GarrisonService;
