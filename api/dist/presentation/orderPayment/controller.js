"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderPaymentController = void 0;
const domain_1 = require("../../domain");
const create_orderPayment_dto_1 = require("../../domain/dtos/orderPayment/create-orderPayment.dto");
const update_orderPayment_dto_1 = require("../../domain/dtos/orderPayment/update-orderPayment.dto");
class OrderPaymentController {
    constructor(serice) {
        this.serice = serice;
        this.HandleError = (error, res) => {
            if (error instanceof (domain_1.CustomError)) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            console.log(`${error}`);
            return res.status(500).json({ error: 'Internal server error' });
        };
        this.create = (req, res) => {
            const [error, dto] = create_orderPayment_dto_1.CreateOrderpaymentDto.create(req.body);
            if (error)
                throw res.status(400).json({ error });
            this.serice.create(dto)
                .then(order => res.json(order))
                .catch(error => this.HandleError(error, res));
        };
        this.get = (req, res) => {
            const id = req.body.id;
            if (!id)
                throw res.status(400).json({ error: 'id is requerid' });
            this.serice.get(id)
                .then(order => res.json(order))
                .catch(error => this.HandleError(error, res));
        };
        this.getAll = (req, res) => {
            const form = {
                isActive: req.body.isActive
            };
            this.serice.getAll(form)
                .then(order => res.json(order))
                .catch(error => this.HandleError(error, res));
        };
        this.update = (req, res) => {
            const [error, dto] = update_orderPayment_dto_1.UpdateOrderpaymentDto.create(req.body);
            if (error)
                throw res.status(400).json({ error });
            this.serice.update(dto)
                .then(order => res.json(order))
                .catch(error => this.HandleError(error, res));
        };
        this.delete = (req, res) => {
            const id = req.body.id;
            if (!id)
                throw res.status(400).json({ error: 'id is requerid' });
            this.serice.delete(id)
                .then(order => res.json(order))
                .catch(error => this.HandleError(error, res));
        };
    }
}
exports.OrderPaymentController = OrderPaymentController;
