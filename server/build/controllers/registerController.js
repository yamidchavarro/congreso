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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class RegisterController {
    constructor() {
    }
    index(req, res) {
        res.send('hola');
    }
    typeDocu(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield database_1.default.query('SELECT * FROM type_docu');
            if (data.length > 0) {
                return res.json(data);
            }
            res.status(404).json({ message: "Not found type document" });
        });
    }
    departament(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield database_1.default.query('SELECT * FROM departament');
            if (data.length > 0) {
                return res.json(data);
            }
            res.status(404).json({ message: "Not found type document" });
        });
    }
    modality(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield database_1.default.query('SELECT * FROM modality');
            if (data.length > 0) {
                return res.json(data);
            }
            res.status(404).json({ message: "Not found type document" });
        });
    }
    modalityProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield database_1.default.query('SELECT * FROM modality_project');
            if (data.length > 0) {
                return res.json(data);
            }
            res.status(404).json({ message: "Not found type document" });
        });
    }
    mainTheme(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield database_1.default.query('SELECT * FROM main_theme');
            if (data.length > 0) {
                return res.json(data);
            }
            res.status(404).json({ message: "Not found type document" });
        });
    }
    city(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const data = yield database_1.default.query('SELECT * FROM city WHERE departament_id = ? ', [id]);
            if (data.length > 0) {
                return res.json(data);
            }
            res.status(404).json({ message: "Not found type document" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('INSERT INTO user_register SET ?', [req.body]);
                res.json({ message: 'User Save' });
            }
            catch (error) {
                res.status(404).json({ message: error });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM user_register WHERE id = ?', [id]);
            res.json({ message: 'User Delete' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE user_register set ?', [req.body, id]);
            res.json({ message: 'User Update' });
        });
    }
}
const registerController = new RegisterController();
exports.default = registerController;
