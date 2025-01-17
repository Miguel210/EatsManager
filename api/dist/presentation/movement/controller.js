"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovementController = void 0;
const domain_1 = require("../../domain");
const create_movement_dto_1 = require("../../domain/dtos/movement/create-movement.dto");
const update_movement_dto_1 = require("../../domain/dtos/movement/update-movement.dto");
const update_movementDetail_1 = require("../../domain/dtos/movementDetail/update-movementDetail");
const update_supplierOrder_dto_1 = require("../../domain/dtos/supplierOrder/update-supplierOrder.dto");
const create_supplierOrder_dto_1 = require("../../domain/dtos/supplierOrder/create-supplierOrder.dto");
const create_movementDetail_1 = require("../../domain/dtos/movementDetail/create-movementDetail");
class MovementController {
    constructor(service) {
        this.service = service;
        this.HandleError = (error, res) => {
            if (error instanceof (domain_1.CustomError)) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            console.log(`${error}`);
            return res.status(500).json({ error: 'Internal server error' });
        };
        this.creatre = (req, res) => {
            const ElaborateId = req.body._meta.userId;
            console.log('1****************************');
            console.log(req.body.data);
            console.log('1****************************');
            const [error, dto] = create_movement_dto_1.CreateMovementDto.create(Object.assign(Object.assign({}, req.body.data), { personId: req.body.data.personId.id, elaborateId: ElaborateId }));
            if (error)
                throw res.status(400).json({ error });
            const movementDetailDto = req.body.data.movementDetail.map((m) => {
                const [error, dto] = create_movementDetail_1.CreateMovementDetailDto.create(Object.assign({ productId: m.product.id }, m));
                return dto;
            });
            const [error2, supplierOrderDto] = create_supplierOrder_dto_1.CreateSupplierOrderDto.create(Object.assign(Object.assign({}, req.body.data.supplierOrders[0]), { status: req.body.data.status }));
            console.log('2****************************');
            console.log(supplierOrderDto);
            console.log('2****************************');
            this.service.create(Object.assign(Object.assign({}, dto), { MovementDetailDto: movementDetailDto, SupplierOrderDto: supplierOrderDto }))
                .then(movement => res.json(movement))
                .catch(error => this.HandleError(error, res));
        };
        this.getById = (req, res) => {
            const id = req.body.id;
            if (!id)
                throw res.json(400).json({ error: 'id is requerid' });
            this.service.getById(id)
                .then(movement => res.json(movement))
                .catch(error => this.HandleError(error, res));
        };
        this.getAll = (req, res) => {
            console.log(req.query);
            let date;
            date = new Date(req.body.date);
            if (!req.body.date) {
                date = undefined;
            }
            const documentId = req.query.documentId ? [req.query.documentId] : '';
            const form = {
                personId: req.body.personId,
                documentId: documentId,
                elaborateId: req.body.elaborateId,
                status: req.body.status,
                isActive: req.body.isActive,
                date: date
            };
            this.service.getAll(form)
                .then(movement => res.json(movement))
                .catch(error => this.HandleError(error, res));
        };
        this.update = (req, res) => {
            const id = req.body.id;
            const data = req.body.supplier.data;
            const [error, dto] = update_movement_dto_1.UpdateMovementDto.create(Object.assign({ id }, data));
            if (error)
                throw res.json(400).json({ error });
            // console.log(dto);
            const dto2 = data.movementDetail.map((m) => update_movementDetail_1.UpdateMovementDetailDto.create(Object.assign(Object.assign({}, m), { productId: m.product.id })));
            const orderDto = update_supplierOrder_dto_1.UpdateSupplierOrderDto.create(data.supplierOrders[0]);
            console.log(dto2);
            this.service.update(Object.assign(Object.assign(Object.assign({}, dto), dto2), orderDto))
                .then(movement => res.json(movement))
                .catch(error => this.HandleError(error, res));
        };
    }
}
exports.MovementController = MovementController;
