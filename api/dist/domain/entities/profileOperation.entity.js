"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileOperationEntity = void 0;
const custom_error_1 = require("../errors/custom.error");
class ProfileOperationEntity {
    constructor(id, profileId, operationId, operation) {
        this.id = id;
        this.profileId = profileId;
        this.operationId = operationId;
        this.operation = operation;
    }
    static fromObject(object) {
        const { id, profileId, operationId, operation } = object;
        if (!id) {
            throw custom_error_1.CustomError.badRequest('Missing id ProfileOperation');
        }
        if (!profileId) {
            throw custom_error_1.CustomError.badRequest('Missing id profileId');
        }
        if (!operationId) {
            throw custom_error_1.CustomError.badRequest('Missing id operationId');
        }
        return new ProfileOperationEntity(id, profileId, operationId, operation);
    }
}
exports.ProfileOperationEntity = ProfileOperationEntity;
