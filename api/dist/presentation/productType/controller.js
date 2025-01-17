"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTypeController = void 0;
const domain_1 = require("../../domain");
const create_productType_dto_1 = require("../../domain/dtos/productType/create-productType.dto");
const update_productType_dto_1 = require("../../domain/dtos/productType/update-productType.dto");
class ProductTypeController {
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
            const [error, productTypeDto] = create_productType_dto_1.CreateproductTypeDto.create(req.body.productType);
            if (error)
                return res.status(400).json({ error });
            this.service.create(productTypeDto)
                .then(type => res.json(type))
                .catch(error => this.handleError(error, res));
        };
        this.getAll = (req, res) => {
            const form = {};
            this.service.getAll(form)
                .then(types => res.json(types))
                .catch(error => this.handleError(error, res));
        };
        this.get = (req, res) => {
            this.service.get(req.body.id)
                .then(type => res.json(type))
                .catch(error => this.handleError(error, res));
        };
        this.update = (req, res) => {
            const [error, updateProductTypeDto] = update_productType_dto_1.UpdateproductTypeDto.create(Object.assign(Object.assign({}, req.body.productType), { id: req.body.id }));
            if (error)
                return res.status(400).json({ error });
            this.service.update(updateProductTypeDto)
                .then(type => res.json(type))
                .catch(error => this.handleError(error, res));
        };
        this.delete = (req, res) => {
            this.service.delete(req.body.id)
                .then(type => res.json(type))
                .catch(error => this.handleError(error, res));
        };
    }
}
exports.ProductTypeController = ProductTypeController;
