const express = require("express");
const router = express.Router();
const authRoutes = require("./auth.routes");
const projectRoutes = require("./project.routes");
const featureRoutes = require("./feature.routes");
const notificationRoutes = require("./notification.routes");
const skillLevelRoutes = require("./skillLevel.routes");
const yearsOfExperienceRoutes = require("./yearsOfExperience.routes");
const industryRoutes = require("./industry.routes");
const educationLevelRoutes = require("./educationLevel.routes");
const skillRoutes = require("./skill.routes");
const userRoutes = require("./user.routes");
const planRoutes = require("./plan.routes")
const subscriptionRoutes = require("./subscription.routes.js");
const companyRoutes = require("./company.routes.js");

router.use("/skill-levels", skillLevelRoutes);
router.use("/years-of-experience", yearsOfExperienceRoutes);
router.use("/industries", industryRoutes);
router.use("/education-levels", educationLevelRoutes);
router.use("/projects", projectRoutes);
router.use("/features", featureRoutes);
router.use("/plans", planRoutes);
router.use("/notifications", notificationRoutes);
router.use("/skills", skillRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/subscriptions", subscriptionRoutes);
router.use("/companies", companyRoutes);

router.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = router;
