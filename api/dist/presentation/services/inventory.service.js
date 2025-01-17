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
exports.InventoryService = void 0;
const data_1 = require("../../data");
const create_inventory_1 = require("../../domain/use-cases/inventory/create-inventory");
const get_inventories_1 = require("../../domain/use-cases/inventory/get-inventories");
class InventoryService {
    constructor(repository) {
        this.repository = repository;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield data_1.prisma.$queryRawUnsafe("select * from product")
                .then(product => product)
                .catch(error => console.log(error));
            console.log(product.length);
            let dictionery = {};
            for (let index = 0; index < product.length; index++) {
                let id = product[index].id;
                dictionery[id] = product[index].description;
            }
            return {
                data: dictionery
            };
        });
    }
    getAll(data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(data);
            const inventory = yield new get_inventories_1.GetAllInventory(this.repository).execute(data)
                .then(inventory => inventory)
                .catch(error => console.log(error));
            return {
                data: inventory
            };
        });
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const inventory = yield new create_inventory_1.CreateInventory(this.repository).execute(dto)
                .then(inventory => inventory)
                .catch(error => console.log({ error }));
            return {
                data: inventory
            };
        });
    }
}
exports.InventoryService = InventoryService;
