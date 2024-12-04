import React from "react";
import { AiOutlineSave, AiOutlineShare } from "react-icons/ai";
import { FaPhone, FaVideo } from "react-icons/fa";

const JobSeekerProfile = ({ jobseeker }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Jobseeker Profile</h1>
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Profile Header */}
        <h2 className="text-2xl font-semibold mb-4">{jobseeker.name}</h2>

        {/* Profile Video */}
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Profile Video</h3>
          <video controls className="w-full h-auto">
            <source src={jobseeker.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* AI Analysis */}
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">AI Analysis</h3>
          <p>
            <strong>Leadership:</strong> {jobseeker.aiAnalysis.leadership}
          </p>
          <p>
            <strong>Technical Proficiency:</strong>{" "}
            {jobseeker.aiAnalysis.technical}
          </p>
          <p>
            <strong>Soft Skills:</strong>{" "}
            {jobseeker.aiAnalysis.softSkills.join(", ")}
          </p>
          <p>
            <strong>Overall Rating:</strong> {jobseeker.aiAnalysis.rating}%
          </p>
        </div>

        {/* Professional Information */}
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Professional Information</h3>
          <p>
            <strong>Location:</strong> {jobseeker.location}
          </p>
          <p>
            <strong>Industry:</strong> {jobseeker.industry}
          </p>
          <p>
            <strong>Years of Experience:</strong> {jobseeker.yearsOfExperience}{" "}
            years
          </p>
          <p>
            <strong>Education:</strong> {jobseeker.education}
          </p>
          <p>
            <strong>Current Role:</strong> {jobseeker.currentRole}
          </p>
          <p>
            <strong>Company:</strong> {jobseeker.company}
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a href={jobseeker.linkedin}>{jobseeker.linkedin}</a>
          </p>
          <p>
            <strong>Portfolio:</strong>{" "}
            <a href={jobseeker.portfolio}>{jobseeker.portfolio}</a>
          </p>
        </div>

        {/* Experience */}
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Experience</h3>
          {jobseeker.experienceDetails.map((exp, index) => (
            <div key={index} className="mb-2">
              <p>
                <strong>{exp.role}</strong> at {exp.company} • {exp.years}
              </p>
              <ul className="list-disc list-inside">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Education</h3>
          {jobseeker.educationDetails.map((edu, index) => (
            <div key={index} className="mb-2">
              <p>
                <strong>{edu.degree}</strong> - {edu.field}
              </p>
              <p>
                {edu.institution} • {edu.year}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Certifications</h3>
          {jobseeker.certifications.map((cert, index) => (
            <div key={index} className="mb-2">
              <p>
                <strong>{cert.title}</strong> - {cert.organization} •{" "}
                {cert.year}
              </p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Skills</h3>
          <p>{jobseeker.skills.join(", ")}</p>
        </div>

        {/* Career Goals */}
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Career Goals</h3>
          <p>{jobseeker.careerGoals}</p>
        </div>

        {/* Video Testimonials */}
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Video Testimonials</h3>
          {jobseeker.testimonials.map((testimonial, index) => (
            <div key={index} className="mb-2">
              <p>
                <strong>{testimonial.name}</strong>, {testimonial.title} at{" "}
                {testimonial.company} (Recorded on {testimonial.date})
              </p>
              <video controls className="w-full h-auto">
                <source src={testimonial.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>

        {/* Recruiter Feedback */}
        <div className="mb-4">
          <h3 className="text-xl font-medium mb-2">Recruiter Feedback</h3>
          <p>
            <strong>Good Match:</strong> {jobseeker.feedback.goodMatch}%
          </p>
          <p>
            <strong>Neutral:</strong> {jobseeker.feedback.neutral}%
          </p>
          <p>
            <strong>Not a Good Match:</strong> {jobseeker.feedback.notGoodMatch}
            %
          </p>
          <textarea
            className="w-full h-32 p-2 border border-gray-300 rounded"
            placeholder="Share your feedback..."
          ></textarea>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
            Submit Feedback
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-around mt-4">
          <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded">
            <AiOutlineSave className="mr-2" /> Save
          </button>
          <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded">
            <AiOutlineShare className="mr-2" /> Share
          </button>
          <button className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded">
            <FaPhone className="mr-2" /> Request Phone Interview
          </button>
          <button className="flex items-center bg-red-500 text-white px-4 py-2 rounded">
            <FaVideo className="mr-2" /> Request Virtual Interview
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerProfile;
