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
exports.SupplierService = void 0;
const domain_1 = require("../../domain");
const create_supplier_1 = require("../../domain/use-cases/supplier/create-supplier");
const delete_supplier_1 = require("../../domain/use-cases/supplier/delete-supplier");
const get_supplier_1 = require("../../domain/use-cases/supplier/get-supplier");
const get_suppliers_1 = require("../../domain/use-cases/supplier/get-suppliers");
const update_supplier_1 = require("../../domain/use-cases/supplier/update-supplier");
class SupplierService {
    constructor(repository) {
        this.repository = repository;
    }
    createSupplier(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const supplier = yield new create_supplier_1.CreateSupplier(this.repository).execute(dto)
                .then(supplier => supplier)
                .catch(error => console.log({ error }));
            return {
                data: supplier
            };
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const suppliers = yield new get_suppliers_1.GetSuppliers(this.repository).execute()
                .then(supplier => supplier)
                .catch(error => console.log({ error }));
            return {
                data: suppliers
            };
        });
    }
    getSupplier(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const supplier = yield new get_supplier_1.GetSupplier(this.repository).execute(id)
                .then(supplier => supplier)
                .catch(error => console.log({ error }));
            if (!supplier)
                throw domain_1.CustomError.badRequest('Product already exist');
            return {
                data: supplier
            };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const supplier = yield new delete_supplier_1.DeleteSupplier(this.repository).execute(id)
                .then(supplier => supplier)
                .catch(error => console.log({ error }));
            return {
                data: supplier
            };
        });
    }
    updateSupplier(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const supplier = yield new update_supplier_1.UpdateSupplier(this.repository).execute(dto)
                .then(supplier => supplier)
                .catch(error => console.log({ error }));
            console.log(supplier);
            return {
                data: supplier
            };
        });
    }
}
exports.SupplierService = SupplierService;
