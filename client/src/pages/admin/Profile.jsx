import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import profilePic from "../../assets/profile.png";
import backgroundImage from "../../assets/background.jpg";

const Profile = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="relative bg-white shadow-md rounded-lg overflow-hidden -ml-4 sm:-ml-6 md:-ml-8 lg:-ml-10">
        <div
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className="absolute top-24 left-6 transform translate-y-1/2">
          <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden">
            <img src={profilePic} alt="Profile" className="w-full h-auto" />
          </div>
        </div>
        <div className="p-8 pt-16">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-3xl font-semibold">Sarah Johnson</h2>
              <p className="text-gray-600">
                Senior Technical Recruiter at TechCorp
              </p>
              <p className="text-gray-500">San Francisco Bay Area</p>
            </div>
            <div className="flex items-center">
              <FaCheckCircle color="#4CAF50" />
              <p className="text-green-600 ml-2">Verified Company</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-between mb-6">
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <h3 className="text-lg font-semibold">Experience</h3>
              <p className="text-gray-600">10+ years in Technical Recruiting</p>
              <p className="text-gray-600">
                Specialized in Software Engineering roles
              </p>
              <p className="text-gray-600">500+ Successful Placements</p>
              <p className="text-gray-600">
                Focus on senior and leadership positions
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-lg font-semibold">Platform Stats</h3>
              <p className="text-gray-600">
                Time on Platform: 2 years 8 months
              </p>
              <p className="text-gray-600">
                Response Rate: 95% within 24 hours
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">About</h3>
            <p className="text-gray-600">
              Passionate about connecting top talent with innovative companies.
              I specialize in building engineering teams for high-growth
              startups and established tech companies. My approach focuses on
              understanding both technical requirements and cultural fit to
              ensure successful, long-term placements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
