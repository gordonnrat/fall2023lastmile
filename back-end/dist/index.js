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
    const User = sequelize.define("user", {
        password: {
            field: "password",
            type: sequelize_1.DataTypes.STRING,
            primaryKey: false,
        },
    });
    try {
        const [userData, metaData] = yield sequelize.query("SELECT * FROM Users WHERE email = :email", { replacements: { email: data.email }, model: User, mapToModel: true });
        console.log(userData);
        console.log(metaData);
        const result = yield (0, bcrypt_1.compare)(data.password, userData.dataValues.password);
        if (result) {
            console.log("login success");
            res.status(200).json({ email: userData.dataValues.email,
                id: userData.dataValues.id });
        }
        else {
            console.log("incorrect creds");
            res.status(400).json({ Message: "Incorrect credentials" });
        }
    }
    catch (e) {
        res.status(500).send("We blew up");
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
            res.status(500).send("How did we get here: " + e);
        }
    }
}));
/**
 * Update User Email:
 * Updates the user email in database to whatever they entered into the field
 * Returns 200 if success
 * Returns 412 if email already exists
 * Returns 400 if unknown error
 */
app.route("/updateUserEmail").post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        yield sequelize.query("UPDATE Users SET email = :email WHERE id = :id ", {
            replacements: {
                email: data.email,
                id: data.id
            },
        });
        res.status(200).send("Successfully changed");
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
            res.status(500).send("How did we get here: " + e);
        }
    }
}));
/**
 * Update User Password:
 * Updates the user password in data to whatever they put in the field
 * Returns 200 if success
 * Returns 400 if error
 */
app.route("/updateUserPassword").post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const securedPassword = yield (0, bcrypt_1.hash)(data.password, saltRounds);
        yield sequelize.query("UPDATE Users SET password = :password WHERE id = :id", {
            replacements: {
                password: securedPassword,
                id: data.id
            }
        });
        res.status(200).send("Successfully changed");
    }
    catch (e) {
        res.status(400).send(e);
    }
}));
/**
 * Get Tasks:
 * Searches database for the tasks assigned to a user
 * Returns 200 if successful and sends tasks to frontend
 * Returns 400 for all other errors
 *
 */
// CHANGE BACK TO GET LATER
app.route("/getTasks").post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const [taskData, metaData] = yield sequelize.query("SELECT * FROM Task WHERE userid = :userid", {
            replacements: {
                userid: data.userid,
            },
        });
        res.status(200).json({ taskData });
    }
    catch (e) {
        res.status(400).send(e);
    }
}));
/**
 * Create Tasks:
 * Inserts tasks into the table and assigns to it the user
 * Returns 200 if successful
 * Returns 400 for all other errors
 */
app.route("/createTasks").put((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        yield sequelize.query("INSERT INTO Task (userid, taskname, taskdesc, date) VALUES (:userid, :taskname, :taskdesc, :date)", {
            replacements: {
                userid: data.id,
                taskname: data.taskname,
                taskdesc: data.taskdesc,
                date: new Date(),
            },
        });
        res.status(200).json({ message: "Success" });
    }
    catch (e) {
        res.status(400).send(e);
    }
}));
/**
 * Update Tasks:
 *
 *
 */
app.route("/updateTasks").post((req, res) => __awaiter(void 0, void 0, void 0, function* () { }));
/**
 * Delete Tasks:
 * Deletes the task assigned to a certain id
 * Returns 200 when successful
 * Returns 400 when error
 *
 */
app.route("/deleteTasks").delete((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        yield sequelize.query("DELETE FROM Task WHERE taskid = :taskid", {
            replacements: {
                taskid: data.taskid,
            },
        });
        res.status(200).send("Successfully deleted");
    }
    catch (e) {
        res.status(400).send(e);
    }
}));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
