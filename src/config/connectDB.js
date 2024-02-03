const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "skinlele-react",
  "postgres.vvmnmswfzgldbafvcjap",
  "Huyphan2002@",
  {
    host: "aws-0-ap-southeast-1.pooler.supabase.com",
    dialect: "postgres",
  }
);
const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
module.exports = connection;
