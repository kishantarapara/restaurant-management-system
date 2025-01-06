const sequelize = require("../config/database");
const Table = require("./Table");
const Order = require("./Order");
const MenuItem = require("./MenuItem");
const User = require("./Users");
const OrderItem = require("./OrderItem");

// Define relationships
Order.belongsTo(Table, { foreignKey: "tableId" });
Order.belongsTo(User, { foreignKey: "userId" });
Order.hasMany(OrderItem, { foreignKey: "orderId" });

OrderItem.belongsTo(Order, { foreignKey: "orderId" });
OrderItem.belongsTo(MenuItem, { foreignKey: "menuItemId" });

module.exports = { sequelize, Table, Order, MenuItem, User, OrderItem };
