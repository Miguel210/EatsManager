"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uuid = void 0;
const uuid_1 = require("uuid");
class Uuid {
    static uuid() {
        return (0, uuid_1.v4)();
    }
}
exports.Uuid = Uuid;
