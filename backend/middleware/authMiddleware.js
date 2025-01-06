const jwt = require("jsonwebtoken");
const { JWTSecret } = require("../utils/constants");

// Middleware to verify Bearer token
const authenticate = (req, res, next) => {
  const authHeader = req.header("Authorization");

  // Check if the Authorization header exists and starts with "Bearer"
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).send("Access Denied: Missing or Invalid Token");
  }

  // Extract the token
  const token = authHeader.split(" ")[1];

  try {
    // Verify the token
    const verified = jwt.verify(token, JWTSecret);
    req.user = verified; // Add user details from token to request object
    next(); // Proceed to the next middleware or route
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};

module.exports = authenticate;
