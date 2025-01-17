"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuController = void 0;
const domain_1 = require("../../domain");
class MenuController {
    constructor(moduleService) {
        this.moduleService = moduleService;
        this.handleError = (error, res) => {
            if (error instanceof (domain_1.CustomError)) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            console.log(`${error}`);
            return res.status(500).json({ error: 'Internal server error' });
        };
        this.menu = (req, res) => {
            res.json(req.body);
        };
    }
}
exports.MenuController = MenuController;
