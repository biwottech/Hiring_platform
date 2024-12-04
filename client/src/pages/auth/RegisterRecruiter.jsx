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
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg">
      <h1 className="text-xl font-medium text-center mb-6">
        Create your recruiter account
      </h1>

      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2.5 border border-gray-200 rounded-md"
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
              className="w-full p-2.5 border border-gray-200 rounded-md"
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
            className="w-full p-2.5 border border-gray-200 rounded-md"
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
            className="w-full p-2.5 border border-gray-200 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-200 rounded-md bg-white"
            required
          >
            <option value="United States">United States</option>
          </select>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <label className="block text-sm text-gray-600 mb-1">Company</label>
            <button
              onClick={openModal}
              className="text-blue-600 text-sm whitespace-nowrap hover:text-blue-700"
            >
              Create New Company
            </button>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <input
              type="text"
              name="company"
              placeholder="Search for company..."
              value={formData.company}
              onChange={handleChange}
              className="flex-1 p-2.5 border border-gray-200 rounded-md"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-200 rounded-md bg-white"
            required
          >
            <option value="recruiter">Recruiter</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-200 rounded-md"
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
            className="w-full p-2.5 border border-gray-200 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2.5 rounded-md hover:bg-blue-700 mt-6"
        >
          Next
        </button>
      </form>
      <CreateCompanyModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleCreateCompany}
        company={[]}
      />
    </div>
  );
}
