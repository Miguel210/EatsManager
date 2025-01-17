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
exports.ClientOrderDetailService = void 0;
const update_clientOrderDetail_1 = require("../../domain/use-cases/clientOrderDetail/update-clientOrderDetail");
const delete_clientOrderDetail_1 = require("../../domain/use-cases/clientOrderDetail/delete-clientOrderDetail");
const getAll_clientOrderDetail_1 = require("../../domain/use-cases/clientOrderDetail/getAll-clientOrderDetail");
const get_clientOrderDetail_1 = require("../../domain/use-cases/clientOrderDetail/get-clientOrderDetail");
const create_clientOrderDetail_1 = require("../../domain/use-cases/clientOrderDetail/create-clientOrderDetail");
class ClientOrderDetailService {
    constructor(repository) {
        this.repository = repository;
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const detail = yield new create_clientOrderDetail_1.CreateClientOrderDetail(this.repository).execute(dto)
                .then(det => det)
                .catch(error => console.log({ error }));
            return {
                data: {
                    detail
                }
            };
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const detail = yield new get_clientOrderDetail_1.GetClientOrderDetail(this.repository).execure(id)
                .then(det => det)
                .catch(error => console.log({ error }));
            return {
                data: {
                    detail
                }
            };
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const detail = yield new getAll_clientOrderDetail_1.GetAllClientOrderDetail(this.repository).execure(form)
                .then(det => det)
                .catch(error => console.log({ error }));
            return {
                data: {
                    detail
                }
            };
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const detail = yield new update_clientOrderDetail_1.UpdateClientOrderDetail(this.repository).execute(dto)
                .then(det => det)
                .catch(error => console.log({ error }));
            return {
                data: {
                    detail
                }
            };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const detail = yield new delete_clientOrderDetail_1.DeleteClientOrderDetail(this.repository).execure(id)
                .then(det => det)
                .catch(error => console.log({ error }));
            return {
                data: {
                    detail
                }
            };
        });
    }
}
exports.ClientOrderDetailService = ClientOrderDetailService;
