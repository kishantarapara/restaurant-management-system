const express = require("express");
const { Order, OrderItem, MenuItem, User } = require("../models");
const authenticate = require("../middleware/authMiddleware");
const router = express.Router();

// Create Order
router.post("/", authenticate, async (req, res) => {
  const { tableId, userId, items } = req.body;

  // Check if the user exists
  const user = await User.findByPk(userId);
  if (!user) return res.status(404).send("User not found");

  // Create the order
  const order = await Order.create({ tableId, userId, totalAmount: 0 });

  // Add order items
  let totalAmount = 0;
  for (const item of items) {
    const menuItem = await MenuItem.findByPk(item.menuItemId);
    if (!menuItem)
      return res.status(404).send(`Menu item ${item.menuItemId} not found`);

    const orderItem = await OrderItem.create({
      orderId: order.id,
      menuItemId: item.menuItemId,
      quantity: item.quantity,
      price: menuItem.price,
    });

    totalAmount += item.quantity * menuItem.price;
  }

  // Update order total
  await order.update({ totalAmount });

  res.status(201).send(order);
});

// Get All Orders with Items
router.get("/", authenticate, async (req, res) => {
  const orders = await Order.findAll({
    include: [
      {
        model: OrderItem,
        include: [{ model: MenuItem, attributes: ["name", "price"] }],
      },
      {
        model: User,
        attributes: ["id", "name", "role"],
      },
    ],
  });
  res.send(orders);
});

module.exports = router;
