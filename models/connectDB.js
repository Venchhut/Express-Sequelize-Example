import { Sequelize } from "sequelize";
const sequelize = new Sequelize("contactapi", "root", "chhut@168?$true", {
  host: "localhost",
  dialect: "mysql" /* one of 'mysql'  */,
});
sequelize
  .authenticate()
  .then(() => {
    console.log("connect success.");
  })
  .catch((error) => {
    console.error("unable to connect", error);
  });
export default sequelize;
