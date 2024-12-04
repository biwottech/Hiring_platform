const express = require("express");
const {
  createCompany,
  getAllCompanies,
  getCompanyByName,
  getCompanyById,
  updateCompany,
  deleteCompany,
  updateStatus,
} = require("../controllers/company.controller");

const router = express.Router();

router.post("/", createCompany);
router.get("/", getAllCompanies);
router.get("/:id", getCompanyById);
router.put("/:id", updateCompany);
router.delete("/:id",deleteCompany);
router.patch("/:id/status", updateStatus);

module.exports = router;
