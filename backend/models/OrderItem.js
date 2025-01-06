const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const OrderItem = sequelize.define("orderItem", {
  orderId: { type: DataTypes.INTEGER, allowNull: false },
  menuItemId: { type: DataTypes.INTEGER, allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
  price: { type: DataTypes.FLOAT, allowNull: false }, // Store the price at the time of order
});

module.exports = OrderItem;
