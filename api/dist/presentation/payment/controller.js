"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
const domain_1 = require("../../domain");
const create_payment_dto_1 = require("../../domain/dtos/payment/create-payment.dto");
const update_payment_dto_1 = require("../../domain/dtos/payment/update-payment.dto");
class PaymentController {
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
            const [error, dto] = create_payment_dto_1.CreatePaymentDto.create(req.body);
            if (error)
                throw res.status(400).json({ error });
            this.service.create(dto)
                .then(payment => res.json(payment))
                .catch(error => this.HandleError(error, res));
        };
        this.get = (req, res) => {
            const id = req.body.id;
            if (!id)
                throw res.status(400).json({ error: 'id is reqierid' });
            this.service.get(id)
                .then(payment => res.json(payment))
                .catch(error => this.HandleError(error, res));
        };
        this.getAll = (req, res) => {
            const form = {
                typePaymentId: req.body.typePaymentId
            };
            this.service.getAll(form)
                .then(payment => res.json(payment))
                .catch(error => this.HandleError(error, res));
        };
        this.update = (req, res) => {
            const [error, dto] = update_payment_dto_1.UpdatePaymentDto.create(req.body);
            if (error)
                throw res.status(400).json({ error });
            this.service.update(dto)
                .then(payment => res.json(payment))
                .catch(error => this.HandleError(error, res));
        };
        this.delete = (req, res) => {
            const id = req.body.id;
            if (!id)
                throw res.status(400).json({ error: 'id is reqierid' });
            this.service.delete(id)
                .then(payment => res.json(payment))
                .catch(error => this.HandleError(error, res));
        };
    }
}
exports.PaymentController = PaymentController;
