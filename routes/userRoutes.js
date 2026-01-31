const express = require("express");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");

console.log('userRoutes loaded, module.exports before:', module.exports);

console.log('authMiddleware type:', typeof authMiddleware, 'authMiddleware:', authMiddleware);

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

console.log('userRoutes about to export, router:', router);

module.exports = router;