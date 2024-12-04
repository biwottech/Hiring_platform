const express = require("express");
const {
  register,
  login,
  forgotPassword,
  resetPassword,
  changePassword,
  getCurrentUser,
  registerJobseeker
} = require("../controllers/auth.controller");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/jobseeker-register", registerJobseeker);
router.post("/forgot-password", forgotPassword);
router.put("/reset-password/:token", resetPassword);
router.put("/change-password", protect, changePassword);

router.use(protect);
router.get("/me", getCurrentUser);

module.exports = router;
