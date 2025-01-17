"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientOrderClientController = void 0;
const domain_1 = require("../../domain");
const create_clientOrderDetail_dto_1 = require("../../domain/dtos/clientOrderDetail/create-clientOrderDetail.dto");
const update_clientOrderDetail_dto_1 = require("../../domain/dtos/clientOrderDetail/update-clientOrderDetail.dto");
class ClientOrderClientController {
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
            const [error, dto] = create_clientOrderDetail_dto_1.CreateClientOrderDetailDto.create(req.body);
            if (error)
                throw res.status(400).json({ error });
            this.service.create(dto)
                .then(order => res.json(order))
                .catch(error => this.HandleError(error, res));
        };
        this.get = (req, res) => {
            const id = req.body.id;
            if (!id)
                throw res.status(400).json({ error: 'id is requerid' });
            this.service.get(id)
                .then(order => res.json(order))
                .catch(error => this.HandleError(error, res));
        };
        this.getAll = (req, res) => {
            const form = {};
            this.service.getAll(form)
                .then(order => res.json(order))
                .catch(error => this.HandleError(error, res));
        };
        this.update = (req, res) => {
            const [error, dto] = update_clientOrderDetail_dto_1.UpdateClientOrderDetailDto.create(req.body);
            if (error)
                throw res.status(400).json({ error });
            this.service.update(dto)
                .then(order => res.json(order))
                .catch(error => this.HandleError(error, res));
        };
        this.delete = (req, res) => {
            const id = req.body.id;
            if (!id)
                throw res.status(400).json({ error: 'id is requerid' });
            this.service.delete(id)
                .then(order => res.json(order))
                .catch(error => this.HandleError(error, res));
        };
    }
}
exports.ClientOrderClientController = ClientOrderClientController;
