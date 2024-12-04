import React from "react";

const EditProfile = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-left mb-8">Edit Profile</h1>

        {/* Main Layout */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Side: Profile Picture */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full relative">
              <span className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer">
                <i className="fas fa-camera text-white"></i>
              </span>
            </div>
          </div>

          {/* Right Side: Profile Visibility and Video Section */}
          <div className="w-full md:w-2/3">
            {/* Profile Visibility */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <label>
                  <input type="checkbox" className="mr-2" /> Profile Visible
                </label>
                <label className="ml-6">
                  <input type="checkbox" className="mr-2" /> Active Status
                </label>
              </div>
            </div>

            {/* Video Section */}
            <div>
              <div className="bg-gray-100 h-32 flex justify-center items-center rounded">
                <span>No video uploaded</span>
              </div>
              <div className="mt-4 flex gap-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded">
                  Record Video
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  Upload Video
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Full Name */}
          <div>
            <label>Full Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          {/* Email */}
          <div>
            <label>Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          {/* Professional Title */}
          <div>
            <label>Professional Title</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          {/* Phone */}
          <div>
            <label>Phone</label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label>Address (Optional)</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          {/* City */}
          <div>
            <label>City</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          {/* State */}
          <div>
            <label>State</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          {/* Zip Code */}
          <div>
            <label>Zip Code</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          {/* Dropdowns */}
          <div>
            <label>Industry</label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 mt-1">
              <option>Technology</option>
            </select>
          </div>
          <div>
            <label>Education Level</label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 mt-1">
              <option>High School</option>
            </select>
          </div>

          <div>
            <label>Years of Experience</label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 mt-1">
              <option>Less than 1 year</option>
            </select>
          </div>
          <div>
            <label>Skill Level</label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 mt-1">
              <option>Entry Level</option>
            </select>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-6">
          <label>Skills</label>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <label>
              <input type="checkbox" className="mr-2" /> Leadership
            </label>
            <label>
              <input type="checkbox" className="mr-2" /> Communication
            </label>
            <label>
              <input type="checkbox" className="mr-2" /> Problem Solving
            </label>
            <label>
              <input type="checkbox" className="mr-2" /> Management
            </label>
            <label>
              <input type="checkbox" className="mr-2" /> Teamwork
            </label>
            <label>
              <input type="checkbox" className="mr-2" /> Analytical
            </label>
          </div>
        </div>

        {/* Profile Customization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label>Background Color</label>
            <input
              type="color"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>
          <div>
            <label>Layout Style</label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 mt-1">
              <option>Classic</option>
            </select>
          </div>
        </div>

        {/* Section Visibility */}
        <div className="mt-6">
          <label>Section Visibility</label>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <label>
              <input type="checkbox" className="mr-2" /> Basic Information
            </label>
            <label>
              <input type="checkbox" className="mr-2" /> Video Introduction
            </label>
            <label>
              <input type="checkbox" className="mr-2" /> Skills
            </label>
            <label>
              <input type="checkbox" className="mr-2" /> Education
            </label>
            <label>
              <input type="checkbox" className="mr-2" /> Experience
            </label>
            <label>
              <input type="checkbox" className="mr-2" /> Recommendations
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-start gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Save Changes
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
