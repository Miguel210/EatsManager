"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferRepositoryImpl = void 0;
class OfferRepositoryImpl {
    constructor(datasoruce) {
        this.datasoruce = datasoruce;
    }
    create(dto) {
        return this.datasoruce.create(dto);
    }
    getOfferbyId(id) {
        return this.datasoruce.getOfferbyId(id);
    }
    getOffers(form) {
        return this.datasoruce.getOffers(form);
    }
    update(dto) {
        return this.datasoruce.update(dto);
    }
    delete(id) {
        return this.datasoruce.delete(id);
    }
}
exports.OfferRepositoryImpl = OfferRepositoryImpl;
