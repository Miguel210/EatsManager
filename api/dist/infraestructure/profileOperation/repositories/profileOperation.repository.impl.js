"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileOperationImpl = void 0;
class ProfileOperationImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    find(moduleName, profileId) {
        return this.datasource.find(moduleName, profileId);
    }
}
exports.ProfileOperationImpl = ProfileOperationImpl;
