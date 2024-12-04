const {
  registerUser,
  loginUser,
  confirmUserEmail,
  resetUserPassword,
} = require("../services/authService");
const {
  sendPasswordResetEmail,
  sendConfirmationEmail,
} = require("../services/emailService");
const User = require("../models/User");
const JobseekerProfile = require("../models/JobseekerProfile");
const RecruiterProfile = require("../models/recruiterprofile");

// Register Jobseeker
exports.registerJobseeker = async (req, res) => {
  try {
    const { email, password, fullName } = req.body;
    const user = await registerUser(email, password, "Jobseeker");
    await JobseekerProfile.create({ userId: user.id, fullName });

    await sendConfirmationEmail(user.email, user.id);
    res.status(201).json({
      message:
        "Registration successful. Check your email to confirm your account.",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.loginJobseeker = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials." });
    }

    // Validate password
    const isValid = await user.validatePassword(password);
    if (!isValid) {
      return res.status(400).json({ error: "Invalid credentials." });
    }

    // Proceed with login logic (e.g., generating JWT)
    res.status(200).json({ message: "Login successful." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred during login." });
  }
};

// Register Recruiter
/**
 * Register a new recruiter profile
 */
const registerRecruiter = async (req, res) => {
  const {
    name,
    email,
    password,
    company_name,
    country,
    company_id,
    years_of_experience,
    specialization,
    successful_placements,
    platform_tenure,
    response_rate,
    about,
    profile_image_url,
  } = req.body;

  try {
    // Step 1: Check if the user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Step 2: Create a new user
    const newUser = await User.create({
      name,
      email,
      password, // Make sure to hash the password before saving
    });

    // Step 3: Create the recruiter profile
    const recruiterProfile = await RecruiterProfile.create({
      user_id: newUser.id,
      company_name,
      country,
      company_id,
      years_of_experience,
      specialization,
      successful_placements,
      platform_tenure,
      response_rate,
      about,
      profile_image_url,
    });

    return res.status(201).json({
      message: "Recruiter registered successfully",
      recruiter: {
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
        },
        profile: recruiterProfile,
      },
    });
  } catch (error) {
    console.error("Error registering recruiter:", error);
    return res.status(500).json({ message: "Internal server error", error });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginUser(email, password);
    res.status(200).json(token);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
};

// Confirm Email
exports.confirmEmail = async (req, res) => {
  try {
    const { token } = req.params;
    await confirmUserEmail(token);
    res.status(200).json({ message: "Email confirmed. You can now log in." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Forgot Password
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    await sendPasswordResetEmail(email);
    res.status(200).json({ message: "Password reset email sent." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Reset Password
exports.resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    await resetUserPassword(token, newPassword);
    res.status(200).json({ message: "Password reset successful." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.checkAuth = async (req, res) => {
  return {
    id: 1,
    name: "Test User",
    role: "jobseeker",
    email: "testuser@example.com",
  };
};




const express = require("express");
const {
  registerJobseeker,
  registerRecruiter,
  login,
  confirmEmail,
  forgotPassword,
  resetPassword,
  loginWithLinkedIn,
  checkAuth
} = require("../controllers/auth.controller"); 

const router = express.Router();

router.post("/register-jobseeker", registerJobseeker);
router.post("/register-recruiter", registerRecruiter);
router.post("/login", login);
router.get("/confirm-email/:token", confirmEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/linkedin", loginWithLinkedIn);
router.get("/check-auth", checkAuth);

module.exports = router;
