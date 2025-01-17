"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevolutionSupplierController = void 0;
const domain_1 = require("../../domain");
const create_devolutionSupplier_dto_1 = require("../../domain/dtos/devolutionSupplier/create-devolutionSupplier.dto");
const update_devolutionSupplier_dto_1 = require("../../domain/dtos/devolutionSupplier/update-devolutionSupplier.dto");
class DevolutionSupplierController {
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
            const [error, dto] = create_devolutionSupplier_dto_1.CreateDevolutionSupplierDto.create(req.body);
            if (error)
                throw res.status(400).json({ error });
            this.service.create(dto)
                .then(devolution => res.json(devolution))
                .catch(error => this.HandleError(error, res));
        };
        this.get = (req, res) => {
            const id = req.body.id;
            if (!id)
                throw res.status(400).json({ error: 'id is requerid' });
            this.service.get(id)
                .then(devolution => res.json(devolution))
                .catch(error => this.HandleError(error, res));
        };
        this.getAll = (req, res) => {
            const form = {};
            this.service.getAll(form)
                .then(devolution => res.json(devolution))
                .catch(error => this.HandleError(error, res));
        };
        this.update = (req, res) => {
            const [error, dto] = update_devolutionSupplier_dto_1.UpdateDevolutionSupplierDto.create(req.body);
            if (error)
                throw res.status(400).json({ error });
            this.service.update(dto)
                .then(devolution => res.json(devolution))
                .catch(error => this.HandleError(error, res));
        };
        this.delete = (req, res) => {
            const id = req.body.id;
            if (!id)
                throw res.status(400).json({ error: 'id is requerid' });
            this.service.delete(id)
                .then(devolution => res.json(devolution))
                .catch(error => this.HandleError(error, res));
        };
    }
}
exports.DevolutionSupplierController = DevolutionSupplierController;
