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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    dialect: "sqlite",
    storage: "sqlite.db",
    dialectOptions: {
        multipleStatements: true,
    },
});
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const port = 4000;
app.route("/login").post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    console.log(data);
    const [userData, metaData] = yield sequelize.query("SELECT username, password FROM Users WHERE username = :username AND password = :password", { replacements: { username: data.username, password: data.password } });
    console.log(userData);
    console.log(metaData);
    res.status(200).send("This confirms that the login works");
}));
app.route("/signup").post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    yield sequelize.query("INSERT INTO Users (username, createdAt, password) VALUES (:username, :createAt, :password)", { replacements: { username: data.username, createAt: new Date(), password: data.password }
    });
    const [select, selectMeta] = yield sequelize.query("SELECT * FROM Users");
    console.log(select);
    console.log("Input user " + data.username);
    console.log("Input pass " + data.password);
    res.status(200).send();
    sequelize.close();
}));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
