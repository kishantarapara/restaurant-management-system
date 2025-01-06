const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models");
const { JWTSecret } = require("../utils/constants");
const router = express.Router();

// Login Route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  if (!user) return res.status(404).send("User not found");

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send("Invalid password");

  const token = jwt.sign({ id: user.id, role: user.role }, JWTSecret);
  res.send({ token });
});

// Register Route
router.post("/register", async (req, res) => {
  const { name, username, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    name,
    username,
    password: hashedPassword,
    role,
  });
  res.send(newUser);
});

module.exports = router;
