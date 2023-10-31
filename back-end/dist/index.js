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
/**
 * LOGIN PAGE:
 * Should see if user data exists in the database.
 * Returns 200 if successfully found
 * Returns 400 if wrong credentials
 * Returns 500 if something went horrifically wrong
 */
app.route("/login").post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const [userData, metaData] = yield sequelize.query("SELECT email, password FROM Users WHERE email = :email AND password = :password", { replacements: { email: data.email, password: data.password } });
    console.log(userData);
    console.log(metaData);
    if (userData.length == 1) {
        res.status(200).json({ Message: "Login successful" });
    }
    else if (userData.length == 0) {
        res.status(400).json({ Message: "Incorrect credentials" });
    }
    else {
        res.status(500).json({ Message: "How did we get here" });
    }
}));
/**
 * SIGNUP PAGE:
 * Adds the user into the database if they don't exist
 * Returns 400 if incorrect length
 * Returns 400 if the user already exists
 * Returns 200 if the operation was a success
 */
app.route("/signup").post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    // Future implementation: 
    // if (data.email.length < someamount && data.email.length > someamount) {
    //    res.status(400).send("Incorrect length! ");
    // }
    try {
        yield sequelize.query("INSERT INTO Users (email, createdAt, password) VALUES (:email, :createAt, :password)", {
            replacements: {
                email: data.email,
                createAt: new Date(),
                password: data.password,
            },
        });
    }
    catch (e) {
        res.status(400).json({ Message: "Error!" });
    }
    res.status(200).json({ Message: "Success! " });
}));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
