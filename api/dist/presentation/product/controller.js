"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const domain_1 = require("../../domain");
const update_product_dto_1 = require("../../domain/dtos/product/update-product.dto");
const create_product_dto_1 = require("../../domain/dtos/product/create-product.dto");
class ProductController {
    constructor(productService) {
        this.productService = productService;
        this.handleError = (error, res) => {
            if (error instanceof (domain_1.CustomError)) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            console.log(`${error}`);
            return res.status(500).json({ error: 'Internal server error' });
        };
        this.createp = (req, res) => {
            const [error, createProductDto] = create_product_dto_1.CreateProductDto.create(Object.assign({}, req.body.product));
            if (error)
                return res.status(400).json({ error });
            this.productService.create(createProductDto)
                .then(product => res.json(product))
                .catch(error => this.handleError(error, res));
        };
        this.getAllp = (req, res) => {
            const form = {
                description: req.body.description,
                code: req.body.code,
                productType: req.body.productType,
                category: req.body.category,
                isActive: req.body.isActive,
                viewMenu: req.body.viewMenu
            };
            this.productService.getAll(form)
                .then(product => res.json(product))
                .catch(error => this.handleError(error, res));
        };
        this.getProduct = (req, res) => {
            const { id } = req.body;
            if (!id && id === undefined)
                return res.status(400).json({ error: 'id nesesary' });
            this.productService.get(id)
                .then(product => res.json(product))
                .catch(error => this.handleError(error, res));
        };
        this.update = (req, res) => {
            const id = req.body.id;
            if (!id)
                return res.status(400).json({ error: 'id nesesary' });
            const [error, updateProductDto] = update_product_dto_1.UpdateProductDto.create(Object.assign(Object.assign({}, req.body.product), { id }));
            if (error)
                return res.status(400).json({ error });
            this.productService.update(updateProductDto)
                .then(product => res.json(product))
                .catch(error => this.handleError(error, res));
        };
        this.delete = (req, res) => {
            const id = req.body.id;
            if (!id)
                return this.handleError('Not id', res);
            this.productService.delete(id)
                .then(product => res.json(product))
                .catch(error => this.handleError(error, res));
        };
    }
}
exports.ProductController = ProductController;
