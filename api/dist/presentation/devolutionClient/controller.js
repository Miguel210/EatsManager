"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevolutionClientController = void 0;
const domain_1 = require("../../domain");
const create_devolutionClient_dto_1 = require("../../domain/dtos/devolutionClient/create-devolutionClient.dto");
const update_devolutionClient_dto_1 = require("../../domain/dtos/devolutionClient/update-devolutionClient.dto");
class DevolutionClientController {
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
            const [error, dto] = create_devolutionClient_dto_1.CreateDevolutionClientDto.create(req.body);
            if (error)
                throw res.status(400).json({ error });
            this.service.create(dto)
                .then(devo => res.json(devo))
                .catch(error => this.HandleError(error, res));
        };
        this.get = (req, res) => {
            const id = req.body.id;
            if (!id)
                throw res.status(400).json({ error: 'id is requerid' });
            this.service.get(id)
                .then(devo => res.json(devo))
                .catch(error => this.HandleError(error, res));
        };
        this.getAll = (req, res) => {
            const form = {};
            this.service.getAll(form)
                .then(devo => res.json(devo))
                .catch(error => this.HandleError(error, res));
        };
        this.update = (req, res) => {
            const [error, dto] = update_devolutionClient_dto_1.UpdateDevolutionClientDto.create(req.body);
            if (error)
                throw res.status(400).json({ error });
            this.service.update(dto)
                .then(devo => res.json(devo))
                .catch(error => this.HandleError(error, res));
        };
        this.delete = (req, res) => {
            const id = req.body.id;
            if (!id)
                throw res.status(400).json({ error: 'id is requerid' });
            this.service.delete(id)
                .then(devo => res.json(devo))
                .catch(error => this.HandleError(error, res));
        };
    }
}
exports.DevolutionClientController = DevolutionClientController;
