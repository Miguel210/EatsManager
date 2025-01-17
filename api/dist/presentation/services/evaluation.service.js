"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationService = void 0;
const create_evaluation_1 = require("../../domain/use-cases/evaluation/create-evaluation");
const get_evaluation_1 = require("../../domain/use-cases/evaluation/get-evaluation");
const gets_evaluation_1 = require("../../domain/use-cases/evaluation/gets-evaluation");
const update_evaluation_1 = require("../../domain/use-cases/evaluation/update-evaluation");
class EvaluationService {
    constructor(repository) {
        this.repository = repository;
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const evaluation = yield new create_evaluation_1.CreateEvaluation(this.repository).execute(dto)
                .then(evaluation => evaluation)
                .catch(error => console.log(error));
            return {
                data: {
                    evaluation
                }
            };
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const evaluation = yield new get_evaluation_1.GetEvaluation(this.repository).execute(id)
                .then(evaluation => evaluation)
                .catch(error => console.log(error));
            return {
                data: {
                    evaluation
                }
            };
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const evaluation = yield new gets_evaluation_1.GetsEvaluation(this.repository).execute(form)
                .then(evaluation => evaluation)
                .catch(error => console.log(error));
            return {
                data: evaluation
            };
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const evaluation = yield new update_evaluation_1.UpdateEvaluation(this.repository).execute(dto)
                .then(evaluation => evaluation)
                .catch(error => console.log(error));
            return {
                data: {
                    evaluation
                }
            };
        });
    }
}
exports.EvaluationService = EvaluationService;
