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
    res.status(200).json({Message: "Login successful"})
  } else if (userData.length == 0) {
    res.status(400).json({Message: "Incorrect credentials"})
  } else {
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
app.route("/signup").post(async (req, res) => {
  const data = req.body;

  // Future implementation: 
  // if (data.email.length < someamount && data.email.length > someamount) {
  //    res.status(400).send("Incorrect length! ");
  // }
  try {
    await sequelize.query(
      "INSERT INTO Users (email, createdAt, password) VALUES (:email, :createAt, :password)",
      {
        replacements: {
          email: data.email,
          createAt: new Date(),
          password: data.password,
        },
      }
    );
  } catch (e){
    res.status(400).json({Message: "Error!"})
  }
  
  res.status(200).json({Message: "Success! "});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
