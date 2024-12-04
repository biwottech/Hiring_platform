import React, { useEffect, useState } from "react";

import { FaCheckCircle } from "react-icons/fa";
import profilePic from "../../assets/profile.png";
import backgroundImage from "../../assets/background.jpg";
import { getProfile } from "../../services/api/api";

const Profile = () => {
  const [userProfile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        console.log(response.data);
        setProfile(response.data);
      } catch (err) {
        setError("Error fetching recruiter profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!userProfile) return <p>No profile data available.</p>;

  // Destructure user and recruiterProfile fields
  const { name, email, role, recruiterProfile } = userProfile;
  const {
    is_verified = false,
    company_name = "N/A",
    country = "N/A",
    years_of_experience = "N/A",
    specialization = "N/A",
    successful_placements = "N/A",
    platform_tenure = "N/A",
    response_rate = "N/A",
    about = "N/A",
  } = recruiterProfile || {};

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
              <h2 className="text-3xl font-semibold">{name}</h2>
              <p className="text-gray-600">{`Role: ${role}`}</p>
              <p className="text-gray-500">{`Email: ${email}`}</p>
            </div>
            <div className="flex items-center">
              <FaCheckCircle color={is_verified ? "#4CAF50" : "#FF0000"} />
              <p className="ml-2">
                {is_verified ? "Verified Company" : "Not Verified"}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-between mb-6">
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <h3 className="text-lg font-semibold">Experience</h3>
              <p className="text-gray-600">{`${years_of_experience} years in Technical Recruiting`}</p>
              <p className="text-gray-600">{`Specialized in ${specialization}`}</p>
              <p className="text-gray-600">{`${successful_placements} Successful Placements`}</p>
              <p className="text-gray-600">{`Focus on senior and leadership positions`}</p>
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-lg font-semibold">Platform Stats</h3>
              <p className="text-gray-600">{`Time on Platform: ${platform_tenure}`}</p>
              <p className="text-gray-600">{`Response Rate: ${response_rate}`}</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">About</h3>
            <p className="text-gray-600">{about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
