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
exports.DashboardService = void 0;
const data_1 = require("../../data");
const domain_1 = require("../../domain");
const get_metric_1 = require("../../domain/use-cases/metric/get-metric");
class DashboardService {
    constructor(metricRepository) {
        this.metricRepository = metricRepository;
    }
    charge(data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(data);
            let info = {};
            for (let index = 0; index < data.length; index++) {
                let ops = yield new get_metric_1.GetMetric(this.metricRepository).execute(data[index])
                    .then(user => user)
                    .catch(error => console.log(error));
                if (!ops) {
                    throw domain_1.CustomError.badRequest('Metric no exist');
                }
                else {
                    info[ops.name] = yield data_1.prisma.$queryRawUnsafe(ops.sentence);
                    //console.log( await prisma.$queryRawUnsafe(ops.sentence) );
                }
                //console.log(ops.sentence);
            }
            console.log(info);
            return {
                data: info
            };
        });
    }
}
exports.DashboardService = DashboardService;
