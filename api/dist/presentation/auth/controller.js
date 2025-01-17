"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const domain_1 = require("../../domain");
const login_user_dto_1 = require("../../domain/dtos/auth/login-user.dto");
class AuthController {
    constructor(authservice) {
        this.authservice = authservice;
        this.handleEror = (error, res) => {
            if (error instanceof (domain_1.CustomError)) {
                return res.status(error.statusCode).json({ error: error.message });
            }
            console.log(`${error}`);
            return res.status(500).json({ error: 'Internal server error' });
        };
        this.loginUser = (req, res) => {
            const [error, loginUserDto] = login_user_dto_1.LoginUserDto.login(req.body);
            if (error)
                throw res.status(400).json({ error });
            this.authservice.loginUser(loginUserDto)
                .then(user => res.json(user))
                .catch(error => this.handleEror(error, res));
        };
        this.getModules = (req, res) => {
            // console.log(req.body._meta);
            const modules = req.body._meta.module;
            this.authservice.operationsModule(modules)
                .then(user => res.json(user))
                .catch(error => this.handleEror(error, res));
        };
    }
}
exports.AuthController = AuthController;
