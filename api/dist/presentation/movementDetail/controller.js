"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovementDetailController = void 0;
const domain_1 = require("../../domain");
const create_movementDetail_1 = require("../../domain/dtos/movementDetail/create-movementDetail");
const update_movementDetail_1 = require("../../domain/dtos/movementDetail/update-movementDetail");
class MovementDetailController {
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
            const [error, dto] = create_movementDetail_1.CreateMovementDetailDto.create(req.body);
            if (error)
                throw res.status(400).json({ error });
            this.service.create(dto)
                .then(movement => res.json(movement))
                .catch(error => this.HandleError(error, res));
        };
        this.get = (req, res) => {
            const id = req.body.id;
            if (!id)
                throw res.status(400).json({ error: 'id is requerid' });
            this.service.get(id)
                .then(movement => res.json(movement))
                .catch(error => this.HandleError(error, res));
        };
        this.getAll = (req, res) => {
            const form = {
                isActive: req.body.isActive,
                productId: req.body.productId
            };
            this.service.getAll(form)
                .then(movement => res.json(movement))
                .catch(error => this.HandleError(error, res));
        };
        this.update = (req, res) => {
            const [error, dto] = update_movementDetail_1.UpdateMovementDetailDto.create(req.body);
            if (error)
                throw res.status(400).json({ error });
            this.service.update(dto)
                .then(movement => res.json(movement))
                .catch(error => this.HandleError(error, res));
        };
        this.delete = (req, res) => {
            const id = req.body.id;
            if (!id)
                throw res.status(400).json({ error: 'id is requerid' });
            this.service.delete(id)
                .then(movement => res.json(movement))
                .catch(error => this.HandleError(error, res));
        };
    }
}
exports.MovementDetailController = MovementDetailController;
