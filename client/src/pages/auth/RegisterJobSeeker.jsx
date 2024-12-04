import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  fetchSkills,
  fetchEducationLevels,
  fetchSkillLevels,
  fetchYearsOfExperiences,
  fetchIndustrys,
} from "../../services/api/api";

export default function RegisterJobSeekerPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    professionalTitle: "",
    industry: "",
    educationLevel: "",
    yearsOfExperience: "",
    skillLevel: "",
    skills: {},
    aboutYourself: "",
    termsAccepted: false,
  });

  const [skills, setSkills] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [educationLevels, setEducationLevels] = useState([]);
  const [yearsOfExperiences, setYearsOfExperience] = useState([]);
  const [skillLevels, setSkillLevels] = useState([]);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getSkillsData = async () => {
      try {
        const response = await fetchSkills();
        setSkills(response.data.data);
      } catch (err) {
        console.error("Error fetching skills:", err);
      }
    };

    const getIndustrys = async () => {
      try {
        const response = await fetchIndustrys(); 
        setIndustries(response.data.data);
      } catch (err) {
        console.error("Error fetching industries:", err);
      }
    };

    const getEducationLevels = async () => {
      try {
        const response = await fetchEducationLevels();
        setEducationLevels(response.data.data);
      } catch (err) {
        console.error("Error fetching education levels:", err);
      }
    };

    const getSkillLevels = async () => {
      try {
        const response = await fetchSkillLevels();
        setSkillLevels(response.data.data);
      } catch (err) {
        console.error("Error fetching skill levels:", err);
      }
    };

    const getYearsOfExperiences = async () => {
      try {
        const response = await fetchYearsOfExperiences();
        setYearsOfExperience(response.data.data);
      } catch (err) {
        console.error("Error fetching years of experience:", err);
      }
    };

    getSkillsData();
    getIndustrys();
    getEducationLevels();
    getSkillLevels();
    getYearsOfExperiences();
  }, []);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (name.startsWith("skills.")) {
      const skillName = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        skills: {
          ...prev.skills,
          [skillName]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      setError("You must accept the terms and conditions to continue.");
      return;
    }

    try {
      setError(null);
      setLoading(true);
      await axios.post("api/auth/jobseeker-register", formData);
      alert("Registration successful!");
      navigate("/jobseeker/login");
    } catch (err) {
      setError("Registration failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Create Your Job Seeker Profile
      </h1>
      {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.city}
          onChange={handleChange}
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.state}
          onChange={handleChange}
        />
        <input
          type="text"
          name="zipCode"
          placeholder="Zip Code"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.zipCode}
          onChange={handleChange}
        />
        <input
          type="text"
          name="professionalTitle"
          placeholder="Professional Title"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.professionalTitle}
          onChange={handleChange}
        />
        <select
          name="industry"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.industry}
          onChange={handleChange}
        >
          <option value="">Select Industry</option>
          {industries.map((industry) => (
            <option key={industry.id} value={industry.id}>
              {industry.name}
            </option>
          ))}
        </select>

        <select
          name="educationLevel"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.educationLevel}
          onChange={handleChange}
        >
          <option value="">Select Education Level</option>
          {educationLevels.map((level) => (
            <option key={level.id} value={level.id}>
              {level.name}
            </option>
          ))}
        </select>

        <select
          name="yearsOfExperience"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.yearsOfExperience}
          onChange={handleChange}
        >
          <option value="">Select Years of Experience</option>
          {yearsOfExperiences.map((exp) => (
            <option key={exp.id} value={exp.id}>
              {exp.name}
            </option>
          ))}
        </select>

        <select
          name="skillLevel"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.skillLevel}
          onChange={handleChange}
        >
          <option value="">Select Skill Level</option>
          {skillLevels.map((level) => (
            <option key={level.id} value={level.id}>
              {level.name}
            </option>
          ))}
        </select>

        <div className="space-y-2">
          <p className="font-medium">Skills</p>
          {skills.map((skill) => (
            <label key={skill.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name={`skills.${skill.name}`}
                checked={formData.skills[skill.name] || false}
                onChange={handleChange}
                className="h-4 w-4"
              />
              <span>{skill.name}</span>
            </label>
          ))}
        </div>

        <textarea
          name="aboutYourself"
          placeholder="Tell us about yourself"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.aboutYourself}
          onChange={handleChange}
        />

        <div className="flex items-center">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="h-4 w-4"
          />
          <span className="ml-2">I accept the terms and conditions</span>
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
