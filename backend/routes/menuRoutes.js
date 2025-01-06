const express = require("express");
const { MenuItem } = require("../models");
const authenticate = require("../middleware/authMiddleware");
const router = express.Router();

// Create Menu Item
router.post("/", authenticate, async (req, res) => {
  const menuItem = await MenuItem.create(req.body);
  res.status(201).send(menuItem);
});

// Get All Menu Items
router.get("/", authenticate, async (req, res) => {
  const menuItems = await MenuItem.findAll();
  res.send(menuItems);
});

// Update Menu Item
router.put("/:id", authenticate, async (req, res) => {
  const { id } = req.params;
  const updated = await MenuItem.update(req.body, { where: { id } });
  res.send(updated);
});

// Delete Menu Item
router.delete("/:id", authenticate, async (req, res) => {
  const { id } = req.params;
  await MenuItem.destroy({ where: { id } });
  res.send("Menu Item deleted");
});

module.exports = router;
