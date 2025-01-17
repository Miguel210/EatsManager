"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierController = void 0;
const domain_1 = require("../../domain");
const create_supplier_dto_1 = require("../../domain/dtos/supplier/create-supplier.dto");
const update_supplier_dto_1 = require("../../domain/dtos/supplier/update-supplier.dto");
class SupplierController {
    constructor(supplierService) {
        this.supplierService = supplierService;
        this.handleError = (error, res) => {
            if (error instanceof (domain_1.CustomError)) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            console.log(`${error}`);
            return res.status(500).json({ error: 'Internal server error' });
        };
        this.init = (req, res) => {
        };
        this.create = (req, res) => {
            console.log(req.body.person);
            const [error, supplierDto] = create_supplier_dto_1.CreateSupplierDto.create(Object.assign(Object.assign({}, req.body.person), { isActive: req.body.isActive }));
            if (error)
                throw res.status(400).json({ error });
            console.log(supplierDto);
            this.supplierService.createSupplier(supplierDto)
                .then(init => res.json(init))
                .catch(error => this.handleError(error, res));
        };
        this.getAll = (req, res) => {
            this.supplierService.getAll()
                .then(supplier => res.json(supplier))
                .catch(error => this.handleError(error, res));
        };
        this.getSupplier = (req, res) => {
            const id = req.body.id;
            console.log(id);
            if (!id)
                throw res.status(400).json('Error Id');
            this.supplierService.getSupplier(id)
                .then(supplier => res.json(supplier))
                .catch(error => this.handleError(error, res));
        };
        this.deletedSupplier = (req, res) => {
            this.supplierService.delete(req.body.id)
                .then(suplier => res.json(suplier))
                .catch(error => this.handleError(error, res));
        };
        this.updateSupplier = (req, res) => {
            const id = req.body.id;
            const isActive = req.body.supplier.isActive;
            const personId = req.body.supplier.personId;
            const [error, updateSupplierDto] = update_supplier_dto_1.UpdateSupplierDto.create(Object.assign(Object.assign({}, req.body.supplier.person), { id, personId, isActive }));
            if (error)
                return res.status(400).json({ error });
            this.supplierService.updateSupplier(updateSupplierDto)
                .then(supplier => res.json(supplier))
                .catch(error => this.handleError(error, res));
        };
    }
}
exports.SupplierController = SupplierController;
