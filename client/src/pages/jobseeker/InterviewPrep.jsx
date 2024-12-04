import React from "react";
import { FaVideo, FaClipboardCheck, FaQuestionCircle } from "react-icons/fa";

const InterviewPrep = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Interview Preparation
      </h1>
      <div className=" mx-auto bg-white shadow-md rounded-lg overflow-hidden p-8">
        {/* Video Interview Tips Card */}
        <section className="mb-8 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FaVideo className="text-blue-600 mr-2" />
            Video Interview Tips
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Find a quiet, well-lit room</li>
            <li>Position yourself against a clean background</li>
            <li>Dress professionally from head to toe</li>
            <li>Test your camera and microphone beforehand</li>
            <li>Look directly into the camera when speaking</li>
            <li>Keep good posture throughout the interview</li>
          </ul>
        </section>

        {/* Interview Requirements Card */}
        <section className="mb-8 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FaClipboardCheck className="text-blue-600 mr-2" />
            Interview Requirements
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Each answer should be 1-2 minutes long</li>
            <li>Total interview time should not exceed 7 minutes</li>
            <li>
              You must select and save a set of questions before proceeding
            </li>
            <li>Questions are tailored to your profile information</li>
          </ul>
        </section>

        {/* Action Buttons */}
        <div className="flex flex-col items-center space-y-4">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            Generate Interview Questions
          </button>
          <div className="flex justify-between w-full">
            <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">
              Save & Proceed
            </button>
            <button
              className="bg-gray-400 text-white py-2 px-4 rounded-lg"
              disabled
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPrep;
