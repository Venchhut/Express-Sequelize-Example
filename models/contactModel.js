import { DataTypes } from "sequelize";
import sequelize from "./connectDB.js";

const Contact = sequelize.define("Contact", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Contact;
