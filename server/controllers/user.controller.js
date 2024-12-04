const { User, RecruiterProfile, JobSeeker } = require("../models");

// Fetch all admins
exports.getAdmins = async (req, res) => {
  try {
    const admins = await User.findAll({
      where: {
        role: "admin",
      },
    });
    return res.status(200).json(admins);
  } catch (err) {
    console.error("Error fetching admins: ", err);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching admins" });
  }
};

// Fetch all recruiters
exports.getRecruiters = async (req, res) => {
  try {
    const recruiters = await User.findAll({
      where: {
        role: "recruiter",
      },
    });
    return res.status(200).json(recruiters);
  } catch (err) {
    console.error("Error fetching recruiters: ", err);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching recruiters" });
  }
};

// Fetch all job seekers
exports.getJobSeekers = async (req, res) => {
  try {
    const jobSeekers = await User.findAll({
      where: {
        role: "job_seeker",
      },
    });
    return res.status(200).json(jobSeekers);
  } catch (err) {
    console.log(err);
    // console.error("Error fetching job seekers: ", err);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching job seekers" });
  }
};

// recruiter profile
exports.fetchRecruiterProfiles = async (req, res) => {
  try {
    const recruiters = await User.findOne({
      where: { role: "recruiter", id: 2 },
    });

    const recruiterProfile = await RecruiterProfile.findOne({
      where: { user_id: 2 },
    });

    const data = {
      ...recruiters?.toJSON(),
      recruiterProfile: recruiterProfile?.toJSON(),
    };
    
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching recruiter profiles:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// jobseeker profile
exports.fetchJobSeekerProfiles = async (req, res) => {
  try {
    const jobSeekers = await User.findAll({
      where: { role: "job_seeker" },
      include: [{ model: JobSeekerProfile, as: "jobSeekerProfile" }],
    });
    return res.status(200).json(jobSeekers);
  } catch (error) {
    console.error("Error fetching job seeker profiles:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
