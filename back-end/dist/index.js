"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const port = 4000;
app.route("/login").get((req, res) => {
    res.status(200).send("This confirms that the login works");
});
app.route("/signup").post((req, res) => {
    const data = req.body;
    console.log(data.username);
    console.log(data.password);
    res.status(200).send();
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
