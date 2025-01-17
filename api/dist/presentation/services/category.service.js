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
exports.CategoryService = void 0;
const domain_1 = require("../../domain");
const create_category_1 = require("../../domain/use-cases/category/create-category");
const delete_category_1 = require("../../domain/use-cases/category/delete-category");
const get_categories_1 = require("../../domain/use-cases/category/get-categories");
const get_category_1 = require("../../domain/use-cases/category/get-category");
const update_category_1 = require("../../domain/use-cases/category/update-category");
class CategoryService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    create(createCategoryDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield new create_category_1.CreateCategory(this.categoryRepository).execute(createCategoryDto)
                .then(category => category)
                .catch(error => console.log({ error }));
            if (!category)
                throw domain_1.CustomError.badRequest('Error data');
            return {
                data: category
            };
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield new get_categories_1.GetCategories(this.categoryRepository).execute(form)
                .then(category => category)
                .catch(error => console.log({ error }));
            if (!categories)
                throw domain_1.CustomError.badRequest('Error data');
            return {
                data: categories
            };
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield new get_category_1.GetCategory(this.categoryRepository).execute(id)
                .then(category => category)
                .catch(error => console.log({ error }));
            if (!category)
                throw domain_1.CustomError.badRequest('Error data');
            return {
                data: category
            };
        });
    }
    update(updateCategoryDto) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(updateCategoryDto);
            const category = yield new update_category_1.UpdateCategory(this.categoryRepository).execute(updateCategoryDto)
                .then(category => category)
                .catch(error => console.log({ error }));
            if (!category)
                throw domain_1.CustomError.badRequest('Error data');
            return {
                data: category
            };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield new delete_category_1.DeleteCategory(this.categoryRepository).execute(id)
                .then(category => category)
                .catch(error => console.log({ error }));
            if (!category)
                throw domain_1.CustomError.badRequest('Error data');
            return {
                data: category
            };
        });
    }
}
exports.CategoryService = CategoryService;
