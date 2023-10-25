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
  if (userData.length == 1) {
    res.status(200).send("Login successful")
  } else if (userData.length == 0) {
    res.status(400).send("Incorrect credentials")
  }
  res.status(500).send("How did we get here");
});

app.route("/signup").post(async (req, res) => {
  const data = req.body;

  // if (data.username.length < someamount && data.username.length > someamount) {
  //    res.status(400).send("Incorrect length! ");
  // }
  try {
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
  } catch (e){
    res.status(400).send("User already exists")
  }
  
  res.status(200).send("Success");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
