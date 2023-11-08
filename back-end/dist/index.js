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
const bcrypt_1 = require("bcrypt");
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
const saltRounds = 10;
/**
 * LOGIN PAGE:
 * Should see if user data exists in the database.
 * Returns 200 if successfully found
 * Returns 400 if wrong credentials
 * Returns 500 if something went horrifically wrong
 */
app.route("/login").post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const User = sequelize.define('user', {
        password: {
            field: 'password',
            type: sequelize_1.DataTypes.STRING,
            primaryKey: false
        }
    });
    const [userData, metaData] = yield sequelize.query("SELECT email, password FROM Users WHERE email = :email", { replacements: { email: data.email },
        model: User,
        mapToModel: true });
    console.log(userData);
    console.log(metaData);
    const result = yield (0, bcrypt_1.compare)(data.password, userData.dataValues.password);
    if (result) {
        console.log("login success");
        res.status(200).json({ Message: "Login successful" });
    }
    else {
        console.log("incorrect creds");
        res.status(400).json({ Message: "Incorrect credentials" });
    }
}));
/**
 * SIGNUP PAGE:
 * Adds the user into the database if they don't exist
 * Returns 400 if incorrect length
 * Returns 400 if the user already exists
 * Returns 200 if the operation was a success
 */
app.route("/signup").put((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    // Future implementation: 
    // if (data.password.length < someamount && data.password.length > someamount) {
    //    res.status(400).send("Incorrect length! ");
    // }
    const securedPassword = yield (0, bcrypt_1.hash)(data.password, saltRounds);
    try {
        yield sequelize.query("INSERT INTO Users (username, email, createdAt, password) VALUES (:username, :email, :createAt, :password)", {
            replacements: {
                username: data.username,
                email: data.email,
                createAt: new Date(),
                password: securedPassword,
            },
        });
        res.status(200).json({ Message: "Success! " });
    }
    catch (e) {
        if (e instanceof sequelize_1.Error) {
            if (e.message == "Validation error") {
                console.log("already exists");
                res.status(412).send("Email already exists!");
            }
            else {
                console.log("unknown: " + e);
                res.status(400).send("Unknown error: " + e);
            }
        }
        else {
            console.log("We blew up");
            res.status(500).send("How did we get here");
        }
    }
}));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
