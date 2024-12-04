import React from "react";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaUsers,
  FaVideo,
  FaChalkboardTeacher,
  FaShareAlt,
  FaQuestionCircle,
} from "react-icons/fa";

const Recruiters = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4 sm:p-8 w-full">
        {/* Header Section */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center mb-12">
          <h1 className="text-2xl font-bold text-blue-600">TalentMatch</h1>
          <Link to="/recruiter/login">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Sign in
            </button>
          </Link>
        </header>

        {/* Main Heading and Subheading */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Transform Your Recruitment Process
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Access verified US talent through AI-powered video profiles and
            revolutionize how you evaluate candidates.
          </p>
          <Link to="/recruiter/register">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              Start Hiring
            </button>
          </Link>
        </section>

        {/* Three Key Benefits Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaCheckCircle className="text-4xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">60% Faster Hiring</h3>
            <p className="text-gray-600">
              Reduce time-to-hire dramatically with pre-recorded video
              introductions and AI-powered candidate matching.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaUsers className="text-4xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Verified Talent</h3>
            <p className="text-gray-600">
              Access only verified US-based professionals, eliminating
              uncertainty in your hiring process.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaVideo className="text-4xl text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Virtual Interviews</h3>
            <p className="text-gray-600">
              Conduct seamless virtual interviews and assess soft skills through
              our integrated platform.
            </p>
          </div>
        </section>

        {/* AI-Powered Talent Search Section */}
        <section className="mb-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">
              AI-Powered Talent Search
            </h3>
            <p className="text-gray-600 mb-4">
              Our advanced AI technology analyzes video profiles to match
              candidates based on both technical skills and cultural fit.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>95% matching accuracy for technical skills</li>
              <li>Personality and soft skills assessment</li>
              <li>Advanced filtering and search capabilities</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src="path/to/talent-search-image.png"
              alt="Talent Search"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Virtual Collaboration Features */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Virtual Collaboration Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-2">
                <FaVideo className="text-4xl text-blue-600 mr-4" />
                <h4 className="text-xl font-semibold">Virtual Interviews</h4>
              </div>
              <ul className="list-disc list-inside text-gray-600">
                <li>HD video calls with screen sharing</li>
                <li>Built-in technical assessment tools</li>
                <li>Interview recording capabilities</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-2">
                <FaUsers className="text-4xl text-blue-600 mr-4" />
                <h4 className="text-xl font-semibold">Team Collaboration</h4>
              </div>
              <ul className="list-disc list-inside text-gray-600">
                <li>Shared candidate notes and ratings</li>
                <li>Team scheduling coordination</li>
                <li>Collaborative hiring decisions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Join Our Recruiter Network */}
        <section className="bg-white p-6 rounded-lg shadow-lg mb-12 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">
            Join Our Recruiter Network
          </h3>
          <p className="text-gray-600 mb-4">
            Help shape the future of talent by joining our network.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center w-full md:w-auto flex flex-col items-center">
              <FaChalkboardTeacher className="text-4xl text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Train Job Seekers</h4>
              <p className="text-gray-600">
                Conduct mock interviews and provide feedback
              </p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center w-full md:w-auto flex flex-col items-center">
              <FaShareAlt className="text-4xl text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Share Expertise</h4>
              <p className="text-gray-600">
                Create content and skill-building resources
              </p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center w-full md:w-auto flex flex-col items-center">
              <FaQuestionCircle className="text-4xl text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Submit Questions</h4>
              <p className="text-gray-600">
                Contribute to the interview question database
              </p>
            </div>
          </div>
          <Link to="/recruiter/register">
            <button className="mt-8 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              Join as a Recruiter
            </button>
          </Link>
        </section>

        {/* Ready to Transform Your Hiring */}
        <section className="bg-blue-600 p-6 rounded-lg shadow-lg text-center text-white mb-12">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to Transform Your Hiring?
          </h3>
          <p className="mb-6">
            Join us and find top talent faster with our AI-powered platform.
          </p>
          <Link to="/linkedin-signin">
            <button className="bg-white text-blue-600 py-2 px-4 rounded-lg hover:bg-gray-200">
              Sign in with LinkedIn to Start
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Recruiters;
