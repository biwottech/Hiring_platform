import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaVideo, FaRobot } from "react-icons/fa";
import videoCreationImage from "../../assets/man-shooting-video.png";
const JobSeekersPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4 sm:p-8 w-full">
        {/* Header Section */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center mb-12">
          <h1 className="text-2xl font-bold">TalentMatch</h1>
          <Link to="/jobseeker/login">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Sign in
            </button>
          </Link>
        </header>

        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Elevate Your Career with Video Profiles
          </h2>
          <p className="mb-4">
            Stand out to employers with AI-powered video introductions and
            verified credentials.
          </p>
          <Link to="/jobseeker/register">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Create Your Profile
            </button>
          </Link>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-left">
            <FaLinkedin className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">LinkedIn Integration</h3>
            <p className="text-gray-600">
              Import your professional history and keep it synced automatically.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-left">
            <FaVideo className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Video Profiles</h3>
            <p className="text-gray-600">
              Create engaging 5-minute video introductions to showcase your
              personality.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-left">
            <FaRobot className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
            <p className="text-gray-600">
              Let our AI identify and tag your key skills from your video
              content.
            </p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-white p-6 rounded-lg shadow-lg flex flex-col lg:flex-row items-center">
          <div className="mb-8 lg:mb-0 lg:mr-8 w-full lg:w-1/2">
            <img
              src={videoCreationImage}
              alt="Video Creation"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4">
              Get Noticed by Top Employers
            </h3>
            <p className="text-gray-600 mb-4">
              Our platform helps you stand out in the job market by showcasing
              your authentic self through video profiles and AI-powered skill
              matching.
            </p>
            <ul className="list-disc list-inside text-left mb-4">
              <li>Create compelling video introductions</li>
              <li>Get verified as a US-based professional</li>
              <li>Connect directly with hiring managers</li>
              <li>Let AI match you with perfect opportunities</li>
            </ul>
            <Link to="/jobseeker/register">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                Join Now
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default JobSeekersPage;
