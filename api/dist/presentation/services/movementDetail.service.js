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
exports.MovementsDetailService = void 0;
const create_movementDetail_1 = require("../../domain/use-cases/movementDetail/create-movementDetail");
const delete_movementDetail_1 = require("../../domain/use-cases/movementDetail/delete-movementDetail");
const get_movementDetail_1 = require("../../domain/use-cases/movementDetail/get-movementDetail");
const getAll_movementDetail_1 = require("../../domain/use-cases/movementDetail/getAll-movementDetail");
const update_movementDetail_1 = require("../../domain/use-cases/movementDetail/update-movementDetail");
class MovementsDetailService {
    constructor(repository) {
        this.repository = repository;
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const movementDet = yield new create_movementDetail_1.CreateMovementDetail(this.repository).execute(dto)
                .then(movement => movement)
                .catch(error => console.log({ error }));
            return {
                data: movementDet
            };
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const movementDet = yield new get_movementDetail_1.GetMovementDetail(this.repository).execute(id)
                .then(movement => movement)
                .catch(error => console.log({ error }));
            return {
                data: movementDet
            };
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const movementDet = yield new getAll_movementDetail_1.GetAllMovementDetail(this.repository).execute(form)
                .then(movement => movement)
                .catch(error => console.log({ error }));
            return {
                data: movementDet
            };
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const movementDet = yield new update_movementDetail_1.UpdateMovementDetail(this.repository).execute(dto)
                .then(movement => movement)
                .catch(error => console.log({ error }));
            return {
                data: movementDet
            };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const movementDet = yield new delete_movementDetail_1.DeleteMovementDetail(this.repository).execute(id)
                .then(movement => movement)
                .catch(error => console.log({ error }));
            return {
                data: movementDet
            };
        });
    }
}
exports.MovementsDetailService = MovementsDetailService;
