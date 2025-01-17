"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilController = void 0;
const domain_1 = require("../../domain");
class UtilController {
    constructor(utilService) {
        this.utilService = utilService;
        this.HandleError = (error, res) => {
            if (error instanceof (domain_1.CustomError)) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            console.log(`${error}`);
            return res.status(500).json({ error: 'Internal server error' });
        };
        this.autocomplete = (req, res) => {
            const { table, field } = req.params;
            this.utilService.autocomplete(table, field)
                .then(util => res.json(util))
                .catch(error => this.HandleError(error, res));
        };
        this.productOrder = (req, res) => {
            this.utilService.productOrder()
                .then(util => res.json(util))
                .catch(error => this.HandleError(error, res));
        };
    }
}
exports.UtilController = UtilController;
