"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const domain_1 = require("../../domain");
const create_category_dto_1 = require("../../domain/dtos/category/create-category.dto");
const update_category_dto_1 = require("../../domain/dtos/category/update-category.dto");
class CategoryController {
    constructor(service) {
        this.service = service;
        this.handleError = (error, res) => {
            if (error instanceof (domain_1.CustomError)) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            console.log(`${error}`);
            return res.status(500).json({ error: 'Internal server error' });
        };
        this.create = (req, res) => {
            const [error, createCategoryDto] = create_category_dto_1.CreateCategoryDto.create(req.body.category);
            if (error)
                return res.status(400).json({ error });
            this.service.create(createCategoryDto)
                .then(category => res.json(category))
                .catch(error => this.handleError(error, res));
        };
        this.getAllc = (req, res) => {
            const form = {
                categoryName: req.body.categoryName,
                isActive: req.body.isActive
            };
            this.service.getAll(form)
                .then(categories => res.json(categories))
                .catch(error => this.handleError(error, res));
        };
        this.getCategory = (req, res) => {
            const id = req.body.id;
            if (!id)
                this.handleError('No id', res);
            this.service.get(id)
                .then(category => res.json(category))
                .catch(error => this.handleError(error, res));
        };
        this.update = (req, res) => {
            const [error, updateCategoryDto] = update_category_dto_1.UpdateCategoryDto.create(Object.assign(Object.assign({}, req.body.category), { id: req.body.id }));
            if (error)
                return res.status(400).json({ error });
            this.service.update(updateCategoryDto)
                .then(category => res.json(category))
                .catch(error => this.handleError(error, res));
        };
        this.delete = (req, res) => {
            const id = req.body.id;
            if (!id)
                throw res.status(400).json('No id');
            this.service.delete(id)
                .then(category => res.json(category))
                .catch(error => this.handleError(error, res));
        };
    }
}
exports.CategoryController = CategoryController;
