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
exports.OfferService = void 0;
const create_offer_1 = require("../../domain/use-cases/offer/create-offer");
const get_offer_1 = require("../../domain/use-cases/offer/get-offer");
const get_offers_1 = require("../../domain/use-cases/offer/get-offers");
const update_offer_1 = require("../../domain/use-cases/offer/update-offer");
const delete_offer_1 = require("../../domain/use-cases/offer/delete-offer");
class OfferService {
    constructor(repository) {
        this.repository = repository;
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const promotion = yield new create_offer_1.CreateOffer(this.repository).execute(dto)
                .then(promotion => promotion)
                .catch(error => console.log(error));
            return {
                data: {
                    promotion
                }
            };
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const promotion = yield new get_offer_1.GetOffer(this.repository).execute(id)
                .then(promotion => promotion)
                .catch(error => console.log({ error }));
            return {
                data: {
                    promotion
                }
            };
        });
    }
    getAll(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const promotion = yield new get_offers_1.GetOffers(this.repository).execute(form)
                .then(promotion => promotion)
                .catch(error => console.log({ error }));
            return {
                data: {
                    promotion
                }
            };
        });
    }
    update(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const promotion = yield new update_offer_1.UpdateOffer(this.repository).execute(dto)
                .then(promotion => promotion)
                .catch(error => console.log({ error }));
            return {
                data: {
                    promotion
                }
            };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const promotion = yield new delete_offer_1.DeleteOffer(this.repository).execute(id)
                .then(promotion => promotion)
                .catch(error => console.log({ error }));
            return {
                data: {
                    promotion
                }
            };
        });
    }
}
exports.OfferService = OfferService;
