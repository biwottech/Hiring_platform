const { Project } = require("../models");

// Create a new project
const createProject = async (req, res) => {
  try {
    const { name, description } = req.body;
    const project = await Project.create({ name, description });
    return res
      .status(201)
      .json({ message: "Project created successfully", project });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error creating project", error: error.message });
  }
};

// Get all projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    return res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error fetching projects", error: error.message });
  }
};

// Get a single project by ID
const getProjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findOne({ where: { id } });
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    return res.status(200).json(project);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error fetching project", error: error.message });
  }
};

// Update project details
const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const project = await Project.findOne({ where: { id } });
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    project.name = name || project.name;
    project.description = description || project.description;
    await project.save();
    return res
      .status(200)
      .json({ message: "Project updated successfully", project });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error updating project", error: error.message });
  }
};

// Change project status
const changeProjectStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body; // expect status like 'active', 'inactive', 'completed'
  try {
    const project = await Project.findOne({ where: { id } });
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    project.status = status;
    await project.save();
    return res
      .status(200)
      .json({ message: "Project status updated successfully", project });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error updating project status", error: error.message });
  }
};

// Delete a project
const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findOne({ where: { id } });
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    await project.destroy();
    return res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error deleting project", error: error.message });
  }
};

module.exports = {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  changeProjectStatus,
  deleteProject,
};
