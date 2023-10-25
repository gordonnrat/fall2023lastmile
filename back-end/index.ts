import express, { Express, Request, Response } from "express";
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
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
