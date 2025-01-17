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
exports.UtilService = void 0;
const data_1 = require("../../data");
class UtilService {
    autocomplete(table, field) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(table);
            const data = yield data_1.prisma.$queryRawUnsafe(`select id, \"${field}\" from ${table}`)
                .then(data => data)
                .catch(error => console.log(error));
            let dictionary = [];
            for (let index = 0; index < data.length; index++) {
                let id = data[index].id;
                dictionary.push(data[index][field]);
            }
            return {
                data: data
            };
        });
    }
    productOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield data_1.prisma.$queryRawUnsafe(`select id, description, price from product`).then(data => data).catch(error => console.log(error));
            return {
                data: data
            };
        });
    }
}
exports.UtilService = UtilService;
