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
exports.ProductService = void 0;
const domain_1 = require("../../domain");
const create_product_1 = require("../../domain/use-cases/product/create-product");
const delete_product_1 = require("../../domain/use-cases/product/delete-product");
const get_product_1 = require("../../domain/use-cases/product/get-product");
const get_products_1 = require("../../domain/use-cases/product/get-products");
const update_product_1 = require("../../domain/use-cases/product/update-product");
class ProductService {
    constructor(repository) {
        this.repository = repository;
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield new create_product_1.CreateProduct(this.repository).execute(dto)
                .then(product => product)
                .catch(error => console.log({ error }));
            if (!product)
                throw domain_1.CustomError.badRequest('Error data');
            return {
                data: product
            };
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield new get_products_1.GetProducts(this.repository).execute(form)
                .then(product => product)
                .catch(error => console.log({ error }));
            if (!products)
                throw domain_1.CustomError.badRequest('Error data');
            return {
                data: products
            };
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield new get_product_1.GetProduct(this.repository).execute(id)
                .then(product => product)
                .catch(error => console.log({ error }));
            if (!product)
                throw domain_1.CustomError.badRequest('Error data');
            return {
                data: product
            };
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield new update_product_1.UpdateProduct(this.repository).execute(dto)
                .then(product => product)
                .catch(error => console.log({ error }));
            if (!product)
                throw domain_1.CustomError.badRequest('Error data');
            return {
                data: product
            };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield new delete_product_1.DeleteProduct(this.repository).execute(id)
                .then(product => product)
                .catch(error => console.log({ error }));
            if (!product)
                throw domain_1.CustomError.badRequest('Error data');
            return {
                data: product
            };
        });
    }
}
exports.ProductService = ProductService;
