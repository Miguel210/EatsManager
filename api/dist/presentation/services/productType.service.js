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
exports.ProductTypeService = void 0;
const domain_1 = require("../../domain");
const create_productType_1 = require("../../domain/use-cases/productType/create-productType");
const delete_productType_1 = require("../../domain/use-cases/productType/delete-productType");
const get_productsType_1 = require("../../domain/use-cases/productType/get-productsType");
const get_productType_1 = require("../../domain/use-cases/productType/get-productType");
const update_productType_1 = require("../../domain/use-cases/productType/update-productType");
class ProductTypeService {
    constructor(repository) {
        this.repository = repository;
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield new create_productType_1.CreateProductType(this.repository).execute(dto)
                .then(type => type)
                .catch(error => console.log({ error }));
            if (!data)
                throw domain_1.CustomError.badRequest('Product already exist');
            return {
                data
            };
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield new get_productsType_1.GetAllProductType(this.repository).execute(form)
                .then(tipes => tipes)
                .catch(error => console.log({ error }));
            if (!data)
                throw domain_1.CustomError.badRequest('Product already exist');
            return {
                data
            };
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield new get_productType_1.GetProductType(this.repository).execute(id)
                .then(type => type)
                .catch(error => console.log({ error }));
            if (!data)
                throw domain_1.CustomError.badRequest('Product already exist');
            return {
                data
            };
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield new update_productType_1.UpdateProductType(this.repository).execute(dto)
                .then(type => type)
                .catch(error => console.log({ error }));
            if (!data)
                throw domain_1.CustomError.badRequest('Product already exist');
            return {
                data
            };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield new delete_productType_1.DeleteProductType(this.repository).execute(id)
                .then(type => type)
                .catch(error => console.log({ error }));
            if (!data)
                throw domain_1.CustomError.badRequest('Product already exist');
            return {
                data
            };
        });
    }
}
exports.ProductTypeService = ProductTypeService;
