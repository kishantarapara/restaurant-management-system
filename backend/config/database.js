const { Sequelize } = require("sequelize");

// Database connection configuration
const sequelize = new Sequelize(
  "restaurant_management_system",
  "root",
  "kht1710",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;
