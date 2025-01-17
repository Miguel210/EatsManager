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
exports.DevolutionClientService = void 0;
const create_devolutionClient_1 = require("../../domain/use-cases/devolutionClient/create-devolutionClient");
const delete_devolutionClient_1 = require("../../domain/use-cases/devolutionClient/delete-devolutionClient");
const get_devolutionClient_1 = require("../../domain/use-cases/devolutionClient/get-devolutionClient");
const getAll_devolutionClient_1 = require("../../domain/use-cases/devolutionClient/getAll-devolutionClient");
const update_devolutionClient_1 = require("../../domain/use-cases/devolutionClient/update-devolutionClient");
class DevolutionClientService {
    constructor(repository) {
        this.repository = repository;
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const devolution = yield new create_devolutionClient_1.CreateDevolutionClient(this.repository).execute(dto)
                .then(devo => devo)
                .catch(error => console.log({ error }));
            return {
                data: {
                    devolution
                }
            };
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const devolution = yield new get_devolutionClient_1.GetDevolutionClient(this.repository).execute(id)
                .then(devo => devo)
                .catch(error => console.log({ error }));
            return {
                data: {
                    devolution
                }
            };
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const devolution = yield new getAll_devolutionClient_1.GetAllDevolutionClient(this.repository).execute(form)
                .then(devo => devo)
                .catch(error => console.log({ error }));
            return {
                data: {
                    devolution
                }
            };
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const devolution = yield new update_devolutionClient_1.UpdateDevolutionClient(this.repository).execute(dto)
                .then(devo => devo)
                .catch(error => console.log({ error }));
            return {
                data: {
                    devolution
                }
            };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const devolution = yield new delete_devolutionClient_1.DeleteDevolutionClient(this.repository).execute(id)
                .then(devo => devo)
                .catch(error => console.log({ error }));
            return {
                data: {
                    devolution
                }
            };
        });
    }
}
exports.DevolutionClientService = DevolutionClientService;
