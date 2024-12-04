const { User, RecruiterProfile } = require("../models");
const { generateToken } = require("../utils/jwt");
const { sendEmail } = require("../services/email.service");
const crypto = require("crypto");

// Registration
exports.register = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    role,
    companyName,
    company,
    country,
  } = req.body;

  try {
    const name = firstName + " " + lastName;
    const user = await User.create({ name, email, password, role });
    const profile = await RecruiterProfile.create({
      user_id: user.id,
      first_name: firstName,
      last_name: lastName,
      company_name: companyName,
      country: country,
      company_id: company != "" ? company : null,
    });

    const token = generateToken(user.id);

    res.status(201).json({ success: true, token, user, profile });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Registration
exports.registerJobseeker = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    role,
    companyName,
    company,
    country,
  } = req.body;

  try {
    const name = firstName + " " + lastName;
    const user = await User.create({ name, email, password, role });
    const profile = await RecruiterProfile.create({
      user_id: user.id,
      first_name: firstName,
      last_name: lastName,
      company_name: companyName,
      country: country,
      company_id: company != "" ? company : null,
    });

    const token = generateToken(user.id);

    res.status(201).json({ success: true, token, user, profile });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const user = await User.findOne({ where: { email: email, role: role } });

    if (!user || !(await user.validatePassword(password))) {
      return res
        .status(401)
        .json({ success: false, error: "Invalid credentials" });
    }

    const token = generateToken(user.id);

    res.status(200).json({ success: true, token, user });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Forgot Password
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    const resetToken = crypto.randomBytes(20).toString("hex");
    user.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    user.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

    await user.save();

    const resetUrl = `${process.env.RESET_PASSWORD_URL}/${resetToken}`;
    const message = `You are receiving this email because you requested a password reset. Click the link to reset: ${resetUrl}`;

    // await sendEmail({ email: user.email, subject: "Password Reset", message });

    res.status(200).json({ success: true, message: "Email sent" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Reset Password
exports.resetPassword = async (req, res) => {
  const resetToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  try {
    const user = await User.findOne({
      where: {
        resetPasswordToken: resetToken,
        resetPasswordExpire: { [Op.gt]: Date.now() },
      },
    });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid or expired token" });
    }

    user.password = req.body.password;
    user.resetPasswordToken = null;
    user.resetPasswordExpire = null;

    await user.save();

    res.status(200).json({ success: true, message: "Password updated" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Change Password
exports.changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  try {
    if (!(await req.user.validatePassword(oldPassword))) {
      return res
        .status(401)
        .json({ success: false, error: "Old password is incorrect" });
    }

    req.user.password = newPassword;
    await req.user.save();

    res
      .status(200)
      .json({ success: true, message: "Password changed successfully" });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.logout = async (req, res) => {
  try {
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ message: "Logout failed", error: error.message });
  }
};

exports.getCurrentUser = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      throw new AuthenticationError("User not authenticated");
    }

    if (!req.user) {
      throw new AuthenticationError("User not found");
    }

    res.status(200).json(req.user);
  } catch (error) {
    throw error;
  }
};
