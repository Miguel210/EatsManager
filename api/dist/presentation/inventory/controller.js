"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryController = void 0;
const custom_error_1 = require("../../domain/errors/custom.error");
const create_inventory_dto_1 = require("../../domain/dtos/inventory/create-inventory.dto");
class InventoryController {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
        this.HandleError = (error, res) => {
            if (error instanceof (custom_error_1.CustomError)) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            console.log(`${error}`);
            return res.status(500).json({ error: 'Internal server error' });
        };
        this.init = (req, res) => {
            this.inventoryService.init()
                .then(init => res.json(init))
                .catch(error => this.HandleError(error, res));
        };
        this.getAll = (req, res) => {
            let date;
            date = new Date(req.body.date);
            if (!req.body.date) {
                date = undefined;
            }
            const data = {
                description: req.body.description,
                code: req.body.code,
                productType: req.body.productType,
                category: req.body.category,
                date: date,
                isActive: req.body.isActive
            };
            this.inventoryService.getAll(data)
                .then(inventory => res.json(inventory))
                .catch(error => this.HandleError(error, res));
        };
        this.createInv = (req, res) => {
            const [error, inventoryDto] = create_inventory_dto_1.CreateInventoryDto.create(req.body);
            if (error)
                throw res.status(400).json({ error });
            //console.log(inventoryDto);
            //res.json(inventoryDto)
            this.inventoryService.create(inventoryDto)
                .then(inv => res.json(inv))
                .catch(error => this.HandleError(error, res));
        };
    }
}
exports.InventoryController = InventoryController;
