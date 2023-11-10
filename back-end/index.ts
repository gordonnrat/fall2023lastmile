import express, { Express, Request, Response } from "express";
import cors from "cors";
import { DataTypes, Error, InstanceError, Sequelize } from "sequelize";
import { genSalt, hash, compare } from "bcrypt";

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
const saltRounds = 10;

/**
 * LOGIN PAGE:
 * Should see if user data exists in the database.
 * Returns 200 if successfully found
 * Returns 400 if wrong credentials
 * Returns 500 if something went horrifically wrong
 */
app.route("/login").post(async (req, res) => {
  const data = req.body;

  const User = sequelize.define("user", {
    password: {
      field: "password",
      type: DataTypes.STRING,
      primaryKey: false,
    },
  });

  try{
    const [userData, metaData] = await sequelize.query(
      "SELECT * FROM Users WHERE email = :email",
      { replacements: { email: data.email }, model: User, mapToModel: true }
    );
    console.log(userData);
    console.log(metaData);
    const result = await compare(data.password, userData.dataValues.password);
    if (result) {
      console.log("login success");
      res.status(200).json({email: userData.dataValues.email,
                            id: userData.dataValues.id});
    } else {
      console.log("incorrect creds");
      res.status(400).json({ Message: "Incorrect credentials" });
    }

  } catch (e){
    res.status(500).send("We blew up");
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

  const securedPassword = await hash(data.password, saltRounds);

  try {
    await sequelize.query(
      "INSERT INTO Users (username, email, createdAt, password) VALUES (:username, :email, :createAt, :password)",
      {
        replacements: {
          username: data.username,
          email: data.email,
          createAt: new Date(),
          password: securedPassword,
        },
      }
    );
    res.status(200).json({ Message: "Success! " });
  } catch (e) {
    if (e instanceof Error) {
      if (e.message == "Validation error") {
        console.log("already exists");
        res.status(412).send("Email already exists!");
      } else {
        console.log("unknown: " + e);
        res.status(400).send("Unknown error: " + e);
      }
    } else {
      console.log("We blew up");
      res.status(500).send("How did we get here: " + e);
    }
  }
});

/**
 * Update User Email:
 * Updates the user email in database to whatever they entered into the field
 * Returns 200 if success
 * Returns 412 if email already exists
 * Returns 400 if unknown error
 */
app.route("/updateUserEmail").post(async (req, res) => {
  const data = req.body;
  try {
    await sequelize.query(
      "UPDATE Users SET email = :email WHERE id = :id ", 
    {
      replacements: {
        email: data.email,
        id: data.id
      },
    });
    res.status(200).send("Successfully changed");
  } catch (e) {
    if (e instanceof Error) {
      if (e.message == "Validation error") {
        console.log("already exists");
        res.status(412).send("Email already exists!");
      } else {
        console.log("unknown: " + e);
        res.status(400).send("Unknown error: " + e);
      }
    } else{
      console.log("We blew up");
      res.status(500).send("How did we get here: " + e);
    }
  }
});

/**
 * Update User Password:
 * Updates the user password in data to whatever they put in the field
 * Returns 200 if success
 * Returns 400 if error
 */
app.route("/updateUserPassword").post(async (req, res) => {
  const data = req.body;
  try{
    const securedPassword = await hash(data.password, saltRounds);
    await sequelize.query(
      "UPDATE Users SET password = :password WHERE id = :id",
      {
        replacements: {
          password: securedPassword,
          id: data.id
        }
      }
    )
    res.status(200).send("Successfully changed");
  } catch (e){
    res.status(400).send(e);
  }
});

/**
 * Get Tasks:
 * Searches database for the tasks assigned to a user
 * Returns 200 if successful and sends tasks to frontend
 * Returns 400 for all other errors
 *
 */
// CHANGE BACK TO GET LATER
app.route("/getTasks").post(async (req, res) => {
  const data = req.body;
  try {
    const [taskData, metaData] = await sequelize.query(
      "SELECT * FROM Task WHERE userid = :userid",
      {
        replacements: {
          userid: data.userid,
        },
      }
    );
    res.status(200).json({ taskData });
  } catch (e) {
    res.status(400).send(e);
  }
});

/**
 * Create Tasks:
 * Inserts tasks into the table and assigns to it the user
 * Returns 200 if successful
 * Returns 400 for all other errors
 */
app.route("/createTasks").put(async (req, res) => {
  const data = req.body;
  try {
    await sequelize.query(
      "INSERT INTO Task (userid, taskname, taskdesc, date) VALUES (:userid, :taskname, :taskdesc, :date)",
      {
        replacements: {
          userid: data.id,
          taskname: data.taskname,
          taskdesc: data.taskdesc,
          date: new Date(),
        },
      }
    );
    res.status(200).json({ message: "Success" });
  } catch (e) {
    res.status(400).send(e);
  }
});

/**
 * Update Tasks:
 *
 *
 */
app.route("/updateTasks").post(async (req, res) => {});

/**
 * Delete Tasks:
 * Deletes the task assigned to a certain id
 * Returns 200 when successful
 * Returns 400 when error
 *
 */
app.route("/deleteTasks").delete(async (req, res) => {
  const data = req.body;
  try {
    await sequelize.query("DELETE FROM Task WHERE taskid = :taskid", {
      replacements: {
        taskid: data.taskid,
      },
    });
    res.status(200).send("Successfully deleted");
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
