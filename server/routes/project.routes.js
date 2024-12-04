const express = require("express");
const router = express.Router();
const projectController = require("../controllers/project.controller");

router.post("/", projectController.createProject);
router.get("/", projectController.getProjects);
router.get("/:id", projectController.getProjectById);
router.put("/:id", projectController.updateProject);
router.put("/:id/status", projectController.changeProjectStatus);
router.delete("/:id", projectController.deleteProject);

module.exports = router;
