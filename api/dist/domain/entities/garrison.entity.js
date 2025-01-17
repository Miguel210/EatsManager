"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GarrisonEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class GarrisonEntity {
    constructor(id, dishId, garrisonId, quantity, identifier, isActive) {
        this.id = id;
        this.dishId = dishId;
        this.garrisonId = garrisonId;
        this.quantity = quantity;
        this.identifier = identifier;
        this.isActive = isActive;
    }
    static fromObject(object) {
        const { id, dishId, garrisonMainDish, garrisonId, garrisonDish, quantity, identifier, isActive } = object;
        if (!id)
            throw custom_error_1.CustomError.badRequest('Missing id garrison');
        if (!dishId && garrisonMainDish[0])
            throw custom_error_1.CustomError.badRequest('Missing dish');
        if (!garrisonId && garrisonDish[0])
            throw custom_error_1.CustomError.badRequest('Missing garrisionId');
        if (!quantity)
            throw custom_error_1.CustomError.badRequest('Missing quantity');
        if (!identifier)
            throw custom_error_1.CustomError.badRequest('Missing identifier');
        if (isActive === undefined)
            throw custom_error_1.CustomError.badRequest('Missing isActive');
        return new GarrisonEntity(id, dishId || garrisonMainDish, garrisonId || garrisonDish, quantity, identifier, isActive);
    }
}
exports.GarrisonEntity = GarrisonEntity;
/*
 dishId             String
  garrisonId         String
  quantity           Decimal?            @db.Decimal(10,2)
  identifier         Int?
  isActive           Boolean             @default(true)
  deleteAt           DateTime?
  isDelete
*/ 
