const express = require("express");
const userController = require("../controllers/user.controller");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// router.use(protect);

router.get("/admins", userController.getAdmins);
router.get("/recruiters", userController.getRecruiters);
router.get("/jobseekers", userController.getJobSeekers);

router.get("/recruiters-profile", userController.fetchRecruiterProfiles);
router.get("/jobseekers-profile", userController.fetchJobSeekerProfiles);

module.exports = router;
