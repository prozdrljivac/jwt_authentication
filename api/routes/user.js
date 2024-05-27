import express from "express";

import controllers from "../controllers/index.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.get(
  "/users",
  authMiddleware.isAuthenticated,
  controllers.userController.getUsers
);

export default router;
