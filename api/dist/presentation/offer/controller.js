"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferController = void 0;
const domain_1 = require("../../domain");
const create_offer_1 = require("../../domain/dtos/offer/create-offer");
const update_offer_1 = require("../../domain/dtos/offer/update-offer");
class OfferController {
    constructor(service) {
        this.service = service;
        this.HandleError = (error, res) => {
            if (error instanceof (domain_1.CustomError)) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            console.log(`${error}`);
            return res.status(500).json({ error: 'Internal server error' });
        };
        this.create = (req, res) => {
            const [error, dto] = create_offer_1.CreateOfferDto.fromObject(req.body);
            if (error)
                throw res.status(400).json({ error });
            this.service.create(dto)
                .then(promotion => res.json(promotion))
                .catch(error => this.HandleError(error, res));
        };
        this.get = (req, res) => {
            const id = req.body.id;
            if (!id)
                throw res.status(400).json('Is requerid id');
            this.service.getById(id)
                .then(promotion => res.json(promotion))
                .catch(error => this.HandleError(error, res));
        };
        this.getAll = (req, res) => {
            const form = {
                productId: req.body.id,
                from: req.body.from,
                isActive: req.body.isActive
            };
            this.service.getAll(form)
                .then(promotion => res.json(promotion))
                .catch(error => this.HandleError(error, res));
        };
        this.update = (req, res) => {
            const [error, dto] = update_offer_1.UpdateOfferDto.fromObject(req.body);
            if (error)
                throw res.status(400).json({ error });
            this.service.update(dto)
                .then(promotion => res.json(promotion))
                .catch(error => this.HandleError(error, res));
        };
        this.delete = (req, res) => {
            const id = req.body.id;
            if (!id)
                throw res.status(400).json('Is requerid id');
            this.service.delete(id)
                .then(promotion => res.json(promotion))
                .catch(error => this.HandleError(error, res));
        };
    }
}
exports.OfferController = OfferController;
