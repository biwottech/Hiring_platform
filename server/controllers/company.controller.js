"use strict";
const { Company } = require("../models");

/**
 * Create a new company
 * @param {Object} req
 * @param {Object} res
 */
const createCompany = async (req, res) => {
  try {
    const { name, logo, description } = req.body;
    const company = await Company.create({
      name, 
      description,
      logo,
    });
    res
      .status(201)
      .json({ message: "Company created successfully", data: company });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating company", error: error.message });
  }
};

/**
 * Get all companies
 * @param {Object} req
 * @param {Object} res
 */
const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll();
    res
      .status(200)
      .json({ message: "Companies retrieved successfully", data: companies });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving companies", error: error.message });
  }
};

/**
 * Get a single company by ID
 * @param {Object} req
 * @param {Object} res
 */
const getCompanyByName = async (req, res) => {
  try { 
    const company = await Company.findAll({ where: { name: req.body.name} });

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    res
      .status(200)
      .json({ message: "Company retrieved successfully", data: company });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving company", error: error.message });
  }
};

/**
 * Get a single company by ID
 * @param {Object} req
 * @param {Object} res
 */
const getCompanyById = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findByPk(id);

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    res
      .status(200)
      .json({ message: "Company retrieved successfully", data: company });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving company", error: error.message });
  }
};

/**
 * Update a company by ID
 * @param {Object} req
 * @param {Object} res
 */
const updateCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, logo } = req.body;

    const company = await Company.findByPk(id);

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    await company.update({ name, description, logo });
    res
      .status(200)
      .json({ message: "Company updated successfully", data: company });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating company", error: error.message });
  }
};

/**
 * Delete a company by ID
 * @param {Object} req
 * @param {Object} res
 */
const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;

    const company = await Company.findByPk(id);

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    await company.destroy();
    res.status(200).json({ message: "Company deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting company", error: error.message });
  }
};

/**
 * Update the status of a company
 * @param {Object} req
 * @param {Object} res
 */
const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const company = await Company.findByPk(id);

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    await company.update({ status });
    res
      .status(200)
      .json({ message: "Company status updated successfully", data: company });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating company status", error: error.message });
  }
};

module.exports = {
  createCompany,
  getAllCompanies,
  getCompanyByName,
  getCompanyById,
  updateCompany,
  deleteCompany,
  updateStatus,
};
