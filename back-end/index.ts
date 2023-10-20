import express, { Express, Request, Response } from "express";
import cors from "cors";
const app = express();
const port = 3000;

app.route("/test").get((req, res) => {
  res.status(200).send("Hello World! from typescript");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
