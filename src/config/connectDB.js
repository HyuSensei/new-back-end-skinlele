const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("skinlele-react", "postgres", "Huyphan2002@", {
  host: "db.elanygpgfrapwdrouemh.supabase.co",
  dialect: "postgres",
});
const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
module.exports = connection;
