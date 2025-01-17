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
exports.MetricDatasourceImpl = void 0;
const data_1 = require("../../../data");
const metric_enity_1 = require("../../../domain/entities/metric.enity");
class MetricDatasourceImpl {
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(id.toString());
            const metric = yield data_1.prisma.metric.findFirst({
                where: {
                    operationId: id
                }
            });
            //console.log(metric);
            if (!metric)
                throw `Todo with id ${id} not found`;
            return metric_enity_1.MetricEntity.fromObject(metric);
        });
    }
}
exports.MetricDatasourceImpl = MetricDatasourceImpl;
