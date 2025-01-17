"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableController = void 0;
const domain_1 = require("../../domain");
const create_table_dto_1 = require("../../domain/dtos/table/create-table.dto");
const update_table_dto_1 = require("../../domain/dtos/table/update-table.dto");
class TableController {
    constructor(TableService) {
        this.TableService = TableService;
        this.handleError = (error, res) => {
            if (error instanceof (domain_1.CustomError)) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            console.log(`${error}`);
            return res.status(500).json({ error: 'Internal server error' });
        };
        this.create = (req, res) => {
            console.log(req.body);
            const [error, createTableDto] = create_table_dto_1.CreateTableDto.create(req.body.table);
            if (error)
                return res.status(400).json({ error });
            this.TableService.create(createTableDto)
                .then(table => res.json(table))
                .catch(error => this.handleError(error, res));
        };
        this.getAllp = (req, res) => {
            const form = {};
            this.TableService.getAll(form)
                .then(table => res.json(table))
                .catch(error => this.handleError(error, res));
        };
        this.getTable = (req, res) => {
            const { id } = req.body;
            if (!id)
                this.handleError('No Id', res);
            this.TableService.get(id)
                .then(table => res.json(table))
                .catch(error => this.handleError(error, res));
        };
        this.getDataTable = (req, res) => {
            const { id } = req.body;
            if (!id)
                this.handleError('No Id', res);
            this.TableService.getDataTable(id)
                .then(table => res.json(table))
                .catch(error => this.handleError(error, res));
        };
        //todo ADD AND UPDATE CLIENOTRDER
        this.clientOrderDataTable = (req, res) => {
            const { id } = req.body.clientOrder.data;
            if (!id)
                this.handleError('No Id', res);
            const ElaborateId = req.body._meta.userId;
            const [error, clientOrderDataTable] = update_table_dto_1.UpdateTableDto.create(Object.assign(Object.assign({}, req.body.clientOrder.data), { id, elaborateId: ElaborateId }));
            if (error)
                return res.status(400).json({ error });
            // console.log('ppppppppppppppppppppppp');
            // console.log(clientOrderDataTable);
            // console.log('ppppppppppppppppppppppp');
            this.TableService.clientOrderDataTable(clientOrderDataTable)
                .then(table => res.json(table))
                .catch(error => this.handleError(error, res));
        };
        this.PayClientOrder = (req, res) => {
            const { id } = req.body.clientOrder.data;
            if (!id)
                this.handleError('No Id', res);
            const ElaborateId = req.body._meta.userId;
            const [error, clientOrderDataTable] = update_table_dto_1.UpdateTableDto.create(Object.assign(Object.assign({}, req.body.clientOrder.data), { id, elaborateId: ElaborateId }));
            if (error)
                return res.status(400).json({ error });
            this.TableService.PayCLientOrderDataTable(clientOrderDataTable)
                .then(table => res.json(table))
                .catch(error => this.handleError(error, res));
        };
        this.finalizateClientOrder = (req, res) => {
            const { id } = req.body.clientOrder.data;
            if (!id)
                this.handleError('No Id', res);
            const ElaborateId = req.body._meta.userId;
            const [error, clientOrderDataTable] = update_table_dto_1.UpdateTableDto.create(Object.assign(Object.assign({}, req.body.clientOrder.data), { id, elaborateId: ElaborateId }));
            if (error)
                return res.status(400).json({ error });
            this.TableService.FinalizateClientOrderDataTable(clientOrderDataTable)
                .then(table => res.json(table))
                .catch(error => this.handleError(error, res));
        };
        this.update = (req, res) => {
            const id = req.body.id;
            console.log(req.body);
            const [error, updateTableDto] = update_table_dto_1.UpdateTableDto.create(Object.assign(Object.assign({}, req.body.table), { id }));
            if (error)
                return res.status(400).json({ error });
            this.TableService.update(updateTableDto)
                .then(table => res.json(table))
                .catch(error => this.handleError(error, res));
        };
        this.delete = (req, res) => {
            const id = req.body.id;
            if (!id)
                return this.handleError('Not id', res);
            this.TableService.delete(id)
                .then(table => res.json(table))
                .catch(error => this.handleError(error, res));
        };
    }
}
exports.TableController = TableController;
