import express, { Express, Request, Response } from "express";
import cors from "cors";
import { Error, InstanceError, Sequelize } from "sequelize";

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

/**
 * LOGIN PAGE:
 * Should see if user data exists in the database.
 * Returns 200 if successfully found
 * Returns 400 if wrong credentials
 * Returns 500 if something went horrifically wrong
 */
app.route("/login").post(async (req, res) => {
  const data = req.body;

  const [userData, metaData] = await sequelize.query(
    "SELECT email, password FROM Users WHERE email = :email AND password = :password",
    { replacements: { email: data.email, password: data.password } }
  );
  console.log(userData);
  console.log(metaData);
  if (userData.length == 1) {
    console.log("login success");
    res.status(200).json({Message: "Login successful"})
  } else if (userData.length == 0) {
    console.log("incorrect creds");
    res.status(400).json({Message: "Incorrect credentials"})
  } else {
    console.log("we blew up");
    res.status(500).json({Message: "How did we get here"});
  }
});

/**
 * SIGNUP PAGE:
 * Adds the user into the database if they don't exist
 * Returns 400 if incorrect length
 * Returns 400 if the user already exists
 * Returns 200 if the operation was a success
 */
app.route("/signup").put(async (req, res) => {
  const data = req.body;

  // Future implementation: 
  // if (data.password.length < someamount && data.password.length > someamount) {
  //    res.status(400).send("Incorrect length! ");
  // }

  try {
    await sequelize.query(
      "INSERT INTO Users (username, email, createdAt, password) VALUES (:username, :email, :createAt, :password)",
      {
        replacements: {
          username: data.username,
          email: data.email,
          createAt: new Date(),
          password: data.password,
        },
      }
    );
    res.status(200).json({Message: "Success! "});
  } catch (e){
    if (e instanceof Error){
      if (e.message == "Validation error"){
        console.log("already exists");
        res.status(412).send("Email already exists!");
      } else {
        console.log("unknown: " + e);
        res.status(400).send("Unknown error: " + e);
      }
    } else {
      console.log("We blew up");
      res.status(500).send("How did we get here");
    }
  }
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
