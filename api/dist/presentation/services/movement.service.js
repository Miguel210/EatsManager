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
exports.MovementService = void 0;
const create_movement_1 = require("../../domain/use-cases/movement/create-movement");
const get_movement_1 = require("../../domain/use-cases/movement/get-movement");
const getAll_movement_1 = require("../../domain/use-cases/movement/getAll-movement");
const update_movement_1 = require("../../domain/use-cases/movement/update-movement");
class MovementService {
    constructor(repository) {
        this.repository = repository;
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const movement = yield new create_movement_1.CreateMovement(this.repository).execute(dto)
                .then(mov => mov)
                .catch(error => console.log({ error }));
            return {
                data: movement
            };
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const movement = yield new get_movement_1.GetMovement(this.repository).execute(id)
                .then(mov => mov)
                .catch(error => console.log({ error }));
            return {
                data: movement
            };
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const movement = yield new getAll_movement_1.GetAllMovement(this.repository).execute(form)
                .then(mov => mov)
                .catch(error => console.log({ error }));
            return {
                data: movement
            };
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const movement = yield new update_movement_1.UpdateMovement(this.repository).execute(dto)
                .then(mov => mov)
                .catch(error => console.log({ error }));
            return {
                data: movement
            };
        });
    }
}
exports.MovementService = MovementService;
