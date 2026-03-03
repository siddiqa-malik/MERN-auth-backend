import express from "express";
import User from "../models/User.js";
import authMiddleware from "../middleware/authMiddleware.js";

console.log('userRoutes loaded');

console.log('authMiddleware type:', typeof authMiddleware);

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

console.log('userRoutes about to export, router:', router);

export default router;