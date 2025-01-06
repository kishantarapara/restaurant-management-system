const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("user", {
  name: { type: DataTypes.STRING, allowNull: false },
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  img: {
    type: DataTypes.BLOB,
    allowNull: true,
  },
  role: {
    type: DataTypes.ENUM("Admin", "Waitstaff", "Kitchen Staff"),
    allowNull: false,
  },
});

module.exports = User;
