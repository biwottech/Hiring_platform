import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { createCompany } from "../../services/api/api";
import CreateCompanyModal from "../../components/recruiter/Company/CreateCompanyModal";

export default function RegisterRecruiterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    country: "United States",
    company: "",
    role: "recruiter",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    try {
      await register({ ...formData, type: "recruiter" });
      navigate("/recruiter/login");
    } catch (error) {
      console.error("Registration failed:", error);
      setError("Registration failed. Please try again.");
    }
  };

  const handleCreateCompany = async (companyData) => {
    setError("");
    try {
      await createCompany(companyData);
      closeModal();
    } catch (error) {
      setError("Registration failed. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Header Section */}
      <div className="w-full bg-white rounded-lg shadow-lg p-6 mb-8">
        <header className="flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-4xl font-bold text-blue-600 text-center">
            TalentMatch
          </h1>
        </header>
      </div>
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className=" text-black py-4 px-6">
          <h1 className="text-lg font-bold text-center">
            Create Your Recruiter Account
          </h1>
        </div>
        <div className="p-6">
          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-2 py-1.5 border border-gray-200 rounded-md text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-2 py-1.5 border border-gray-200 rounded-md text-sm"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-2 py-1.5 border border-gray-200 rounded-md text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-2 py-1.5 border border-gray-200 rounded-md text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Country
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-2 py-1.5 border border-gray-200 rounded-md bg-white text-sm"
                required
              >
                <option value="United States">United States</option>
              </select>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <label className="block text-sm text-gray-600 mb-1">
                  Company
                </label>
                <button
                  onClick={openModal}
                  className="text-blue-600 text-sm hover:text-blue-700"
                >
                  Create New Company
                </button>
              </div>
              <input
                type="text"
                name="company"
                placeholder="Search for company..."
                value={formData.company}
                onChange={handleChange}
                className="w-full px-2 py-1.5 border border-gray-200 rounded-md text-sm"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-2 py-1.5 border border-gray-200 rounded-md bg-white text-sm"
                required
              >
                <option value="recruiter">Recruiter</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-2 py-1.5 border border-gray-200 rounded-md text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-2 py-1.5 border border-gray-200 rounded-md text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 text-sm"
            >
              Next
            </button>
          </form>
        </div>
        <CreateCompanyModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSubmit={handleCreateCompany}
          company={[]}
        />
      </div>
    </div>
  );
}
