"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registerController_1 = __importDefault(require("../controllers/registerController"));
class RegisterRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', registerController_1.default.index);
        this.router.get('/typedocu', registerController_1.default.typeDocu);
        this.router.get('/departament', registerController_1.default.departament);
        this.router.get('/modality', registerController_1.default.modality);
        this.router.get('/modalityproject', registerController_1.default.modalityProject);
        this.router.get('/maintheme', registerController_1.default.mainTheme);
        this.router.get('/city/:id', registerController_1.default.city);
        this.router.post('/register', registerController_1.default.create);
        // this.router.delete('/register:id', registerController.index);
    }
}
const registerRouter = new RegisterRouter();
exports.default = registerRouter.router;
