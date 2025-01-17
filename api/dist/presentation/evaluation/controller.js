"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationController = void 0;
const domain_1 = require("../../domain");
const create_evaluation_dto_1 = require("../../domain/dtos/evaluation/create-evaluation.dto");
const update_evaluation_dto_1 = require("../../domain/dtos/evaluation/update-evaluation.dto");
class EvaluationController {
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
            req.body.evaluatorId = req.body._meta.userId;
            req.body.employeeId = req.body.employeeId.id;
            console.log(req.body);
            const [error, dto] = create_evaluation_dto_1.CreateEvaluationDto.create(req.body);
            // console.log(error);
            // console.log('dto!.employeeId');
            if (error)
                throw res.status(400).json({ error });
            this.service.create(dto)
                .then(evaluation => res.json(evaluation))
                .catch(error => this.HandleError(error, res));
        };
        this.getById = (req, res) => {
            const id = req.body.id;
            if (!id)
                throw res.status(400).json({ error: `Requerid id` });
            this.service.getById(id)
                .then(evaluation => res.json(evaluation))
                .catch(error => this.HandleError(error, res));
        };
        this.getAll = (req, res) => {
            const form = {
                employeeId: req.body.employeeId,
                evaluatorId: req.body.evaluatorId,
                date: req.body.date,
                isActive: req.body.isActive
            };
            this.service.getAll(form)
                .then(evaluation => res.json(evaluation))
                .catch(error => this.HandleError(error, res));
        };
        this.update = (req, res) => {
            const [error, dto] = update_evaluation_dto_1.UpdateEvaluationDto.create(Object.assign(Object.assign({}, req.body), req.body.evaluation));
            if (error)
                throw res.status(400).json({ error });
            this.service.update(dto)
                .then(evaluation => res.json(evaluation))
                .catch(error => this.HandleError(error, res));
        };
    }
}
exports.EvaluationController = EvaluationController;
