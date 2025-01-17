"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardController = void 0;
const domain_1 = require("../../domain");
class DashboardController {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
        this.handleEror = (error, res) => {
            if (error instanceof (domain_1.CustomError)) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            console.log(`${error}`);
            return res.status(500).json({ error: 'Internal server error' });
        };
        this.inicio = (req, res) => {
            //console.log(req.params.module);
            const data = req.body._meta; //.operation[0].operationId;
            console.log(data);
            let a = [];
            for (let index = 0; index < data.operation.length; index++) {
                const element = data.operation[index].operationId; //.name
                a.push(element); //`{name: ${element}}`
            }
            this.dashboardService.charge(a)
                .then(dashboard => res.json(dashboard))
                .catch(error => this.handleEror(error, res));
        };
    }
}
exports.DashboardController = DashboardController;
