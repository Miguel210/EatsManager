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
exports.ClientOrderService = void 0;
const create_clientOrder_1 = require("../../domain/use-cases/clientOrder/create-clientOrder");
const delete_clientOrder_1 = require("../../domain/use-cases/clientOrder/delete-clientOrder");
const get_clientOrder_1 = require("../../domain/use-cases/clientOrder/get-clientOrder");
const getAll_clientOrder_1 = require("../../domain/use-cases/clientOrder/getAll-clientOrder");
const update_clientOrder_1 = require("../../domain/use-cases/clientOrder/update-clientOrder");
class ClientOrderService {
    constructor(repository) {
        this.repository = repository;
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield new create_clientOrder_1.CreateClientOrder(this.repository).execute(dto)
                .then(order => order)
                .catch(error => console.log({ error }));
            return {
                data: {
                    order
                }
            };
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield new get_clientOrder_1.GetClientOrder(this.repository).execute(id)
                .then(order => order)
                .catch(error => console.log({ error }));
            return {
                data: {
                    order
                }
            };
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield new getAll_clientOrder_1.GetAllClientOrder(this.repository).execute(form)
                .then(order => order)
                .catch(error => console.log({ error }));
            return {
                data: {
                    order
                }
            };
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield new update_clientOrder_1.UpdateClientOrder(this.repository).execute(dto)
                .then(order => order)
                .catch(error => console.log({ error }));
            return {
                data: {
                    order
                }
            };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield new delete_clientOrder_1.DeleteClientOrder(this.repository).execute(id)
                .then(order => order)
                .catch(error => console.log({ error }));
            return {
                data: {
                    order
                }
            };
        });
    }
}
exports.ClientOrderService = ClientOrderService;
