import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaLinkedin } from "react-icons/fa";
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
    video: null,
    profilePicture: null,
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
    const { name, value, checked, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else if (name.startsWith("skills.")) {
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

    const profileData = new FormData();
    for (const key in formData) {
      profileData.append(key, formData[key]);
    }

    try {
      setError(null);
      setLoading(true);
      await axios.post("api/auth/jobseeker-register", profileData);
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
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Create Your Job Seeker Profile
      </h1>
      {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Connect with LinkedIn */}
        <div className="flex justify-center mb-4">
          <button
            type="button"
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded"
          >
            <FaLinkedin className="mr-2" /> Connect with LinkedIn
          </button>
        </div>

        {/* Profile Picture Upload */}
        <div className="flex items-center justify-center mb-4">
          <label className="relative">
            <input
              type="file"
              name="profilePicture"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />
            {formData.profilePicture ? (
              <img
                src={URL.createObjectURL(formData.profilePicture)}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 border-2 border-gray-300">
                Upload Profile Picture
              </div>
            )}
          </label>
        </div>

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
          placeholder="Street Address"
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
          placeholder="ZIP Code"
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
          required
        />

        <select
          name="industry"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.industry}
          onChange={handleChange}
          required
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
          required
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
          required
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
          required
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
          <div className="grid grid-cols-2 gap-4">
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
        </div>

        <textarea
          name="aboutYourself"
          placeholder="Tell us about yourself"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.aboutYourself}
          onChange={handleChange}
          required
        />
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Introduction Video</h3>
          <input
            type="file"
            name="video"
            accept="video/*"
            onChange={handleChange}
            className="block w-full text-sm text-gray-500
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-blue-700
                   hover:file:bg-blue-100"
          />
          <p className="text-xs text-gray-500">
            You can upload a video or record one directly here.
          </p>
          <p className="text-xs text-gray-500">
            Ensure your video is under 5 minutes.
          </p>
        </div>

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
          {loading ? "Submitting..." : "Create Profile"}
        </button>
      </form>
    </div>
  );
}
