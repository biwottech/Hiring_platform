import React from "react";
import { Link } from "react-router-dom";
import { FaVideo, FaCheckCircle, FaNetworkWired } from "react-icons/fa";
import networkIllustration from "../../assets/networkIllustration.jpg";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4 sm:p-8">
        {/* Card Header Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <header className="flex flex-col sm:flex-row justify-between items-center">
            <h1 className="text-4xl font-bold text-blue-600 mb-4 sm:mb-0">
              TalentMatch
            </h1>
            <div className="flex space-x-4">
              <Link to="/job-seekers">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  For Job Seekers
                </button>
              </Link>
              <Link to="/recruiters">
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  For Recruiters
                </button>
              </Link>
            </div>
          </header>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            The Future of Professional Networking
          </h2>
          <p className="text-lg text-gray-600">
            Revolutionizing how talent connects with opportunities through
            AI-powered video profiles and verified professional networks.
          </p>
        </div>

        {/* Features Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-left">
              <FaVideo className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Video-First Platform
              </h3>
              <p className="text-gray-600">
                Break free from traditional resumes with engaging video
                introductions that showcase your true potential.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-left">
              <FaCheckCircle className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Verified Network</h3>
              <p className="text-gray-600">
                Connect with confidence through our verification system.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-left">
              <FaNetworkWired className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                AI-Powered Matching
              </h3>
              <p className="text-gray-600">
                Let our advanced AI analyze videos to match skills with
                opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Illustration and Description Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between mb-12">
          <div className="mb-8 lg:mb-0 lg:mr-8 w-full lg:w-1/2">
            <img
              src={networkIllustration}
              alt="Network Illustration"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">
              More Than Just Another Professional Network
            </h3>
            <p className="text-gray-600 mb-4">
              We’re transforming professional networking by combining the power
              of video, AI, and verified connections to create meaningful
              professional relationships.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/job-seekers">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Find Your Next Role
                </button>
              </Link>
              <Link to="/recruiters">
                <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
                  Find Top Talent
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
