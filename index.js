import express, { json } from "express";
import "dotenv/config";
import contactRouter from "./routes/contact.js";
import errorHandler from "./middleware/errorHandler.js";
import sequelize from "./models/connectDB.js";
const app = express();
const Port = process.env.PORT || 3000; // Fix the capitalization of 'PORT'
sequelize
  .sync()
  .then((result) => {
    console.log("You created table success!");
  })
  .catch((err) => {
    console.log("You didn't create table yet!", err);
  });
app.use(express.json());
app.use("/api/contacts", contactRouter);
app.use(errorHandler);
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}!`); // Fix the typo in the log message
});
