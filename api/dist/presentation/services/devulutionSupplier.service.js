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
exports.DevolutionSupplierService = void 0;
const create_devolutionSupplier_1 = require("../../domain/use-cases/devolutionSupplier/create-devolutionSupplier");
const delete_devolutionSupplier_1 = require("../../domain/use-cases/devolutionSupplier/delete-devolutionSupplier");
const get_devolutionSupplier_1 = require("../../domain/use-cases/devolutionSupplier/get-devolutionSupplier");
const getAll_devolutionSupplier_1 = require("../../domain/use-cases/devolutionSupplier/getAll-devolutionSupplier");
const update_devolutionSupplier_1 = require("../../domain/use-cases/devolutionSupplier/update-devolutionSupplier");
class DevolutionSupplierService {
    constructor(repository) {
        this.repository = repository;
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const devolution = yield new create_devolutionSupplier_1.CreateDevolutionSupplier(this.repository).execute(dto)
                .then(dev => dev)
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
            const devolution = yield new get_devolutionSupplier_1.GetDevolutionSupplier(this.repository).execute(id)
                .then(dev => dev)
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
            const devolution = yield new getAll_devolutionSupplier_1.GetAllDevolutionSupplier(this.repository).execute(form)
                .then(dev => dev)
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
            const devolution = yield new update_devolutionSupplier_1.UpdateDevolutionSupplier(this.repository).execute(dto)
                .then(dev => dev)
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
            const devolution = yield new delete_devolutionSupplier_1.DeleteDevolutionSupplier(this.repository).execute(id)
                .then(dev => dev)
                .catch(error => console.log({ error }));
            return {
                data: {
                    devolution
                }
            };
        });
    }
}
exports.DevolutionSupplierService = DevolutionSupplierService;
