const express = require("express");
const { Table } = require("../models");
const authenticate = require("../middleware/authMiddleware");
const router = express.Router();

// Create Table
router.post("/", authenticate, async (req, res) => {
  const table = await Table.create(req.body);
  res.status(201).send(table);
});

// Get All Tables
router.get("/", authenticate, async (req, res) => {
  const tables = await Table.findAll();
  res.send(tables);
});

// Update Table
router.put("/:id", authenticate, async (req, res) => {
  const { id } = req.params;
  const updated = await Table.update(req.body, { where: { id } });
  res.send(updated);
});

// Delete Table
router.delete("/:id", authenticate, async (req, res) => {
  const { id } = req.params;
  await Table.destroy({ where: { id } });
  res.send("Table deleted");
});

module.exports = router;
