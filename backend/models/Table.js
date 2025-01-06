const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Table = sequelize.define("table", {
  tableNumber: { type: DataTypes.INTEGER, allowNull: false, unique: true },
  status: {
    type: DataTypes.ENUM("Available", "Occupied"),
    defaultValue: "Available",
  },
});

module.exports = Table;
