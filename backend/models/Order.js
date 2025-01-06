const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Order = sequelize.define("order", {
  tableId: { type: DataTypes.INTEGER, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false }, // Reference to User
  status: {
    type: DataTypes.ENUM("Pending", "In Progress", "Ready", "Served", "Paid"),
    defaultValue: "Pending",
  },
  totalAmount: { type: DataTypes.FLOAT, allowNull: false },
});

module.exports = Order;
