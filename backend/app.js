const express = require("express");
const { sequelize } = require("./models");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const tableRoutes = require("./routes/tableRoutes");
const menuRoutes = require("./routes/menuRoutes");

const app = express();
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/orders", orderRoutes);
app.use("/tables", tableRoutes);
app.use("/menu", menuRoutes);

// Sync Database
sequelize.sync({ alter: true }).then(() => console.log("Database synced."));

module.exports = app;
