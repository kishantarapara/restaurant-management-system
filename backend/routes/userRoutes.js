const express = require("express");
const { User } = require("../models");
const authenticate = require("../middleware/authMiddleware");
const router = express.Router();

// Create User
router.post("/", authenticate, async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).send(user);
});

// Get All Users
router.get("/", authenticate, async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

// Update User
router.put("/:id", authenticate, async (req, res) => {
  const { id } = req.params;
  const updated = await User.update(req.body, { where: { id } });
  res.send(updated);
});

// Delete User
router.delete("/:id", authenticate, async (req, res) => {
  const { id } = req.params;
  await User.destroy({ where: { id } });
  res.send("User deleted");
});

module.exports = router;
