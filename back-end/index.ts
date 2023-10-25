import express, { Express, Request, Response } from "express";
import cors from "cors";
import { Sequelize } from "sequelize";
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "sqlite.db",
  dialectOptions: {
    multipleStatements: true,
  },
});

const app = express();
app.use(cors());
app.use(express.json());
const port = 4000;

app.route("/login").post(async (req, res) => {
  const data = req.body;

  const [userData, metaData] = await sequelize.query(
    "SELECT username, password FROM Users WHERE username = :username AND password = :password",
    { replacements: { username: data.username, password: data.password } }
  );
  console.log(userData);
  console.log(metaData);

  res.status(200).send("This confirms that the login works");
});

app.route("/signup").post(async (req, res) => {
  const data = req.body;

  await sequelize.query(
    "INSERT INTO Users (username, createdAt, password) VALUES (:username, :createAt, :password)",
    {
      replacements: {
        username: data.username,
        createAt: new Date(),
        password: data.password,
      },
    }
  );

  const [select, selectMeta] = await sequelize.query("SELECT * FROM Users");
  console.log(select);
  console.log("Input user " + data.username);
  console.log("Input pass " + data.password);

  res.status(200).send();
  sequelize.close();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
