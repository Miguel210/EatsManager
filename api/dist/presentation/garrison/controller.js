"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GarrisonController = void 0;
const domain_1 = require("../../domain");
const create_garrison_dto_1 = require("../../domain/dtos/garrison/create-garrison.dto");
const update_garrison_dto_1 = require("../../domain/dtos/garrison/update-garrison.dto");
class GarrisonController {
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
            const [error, createGarrisonDto] = create_garrison_dto_1.CreateGarrisonDto.create(req.body);
            if (error)
                throw res.status(400).json({ error });
            this.service.create(createGarrisonDto)
                .then(garrison => res.json(garrison))
                .catch(error => this.handleError(error, res));
        };
        this.get = (req, res) => {
            const id = req.body.id;
            if (!id)
                throw res.status(400).json('Requerid id');
            this.service.get(id)
                .then(garrison => res.json(garrison))
                .catch(error => this.handleError(error, res));
        };
        this.getAll = (req, res) => {
            const dishId = req.body.dishId;
            if (!dishId)
                throw res.status(400).json('Requerid dishId');
            this.service.getAll(dishId)
                .then(garrison => res.json(garrison))
                .catch(error => this.handleError(error, res));
        };
        this.update = (req, res) => {
            const [error, updateGarrisonDto] = update_garrison_dto_1.UpdateGarrisonDto.create(req.body);
            if (error)
                throw res.status(400).json({ error });
            this.service.update(updateGarrisonDto)
                .then(garrison => res.json(garrison))
                .catch(error => this.handleError(error, res));
        };
        this.delete = (req, res) => {
            const id = req.body.id;
            if (!id)
                throw res.status(400).json('Requerid id');
            this.service.delete(id)
                .then(garrison => res.json(garrison))
                .catch(error => this.handleError(error, res));
        };
    }
}
exports.GarrisonController = GarrisonController;
