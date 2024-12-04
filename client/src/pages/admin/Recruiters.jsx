import React, { useEffect, useState } from "react";
import {
  getRecruiters,
  changeRecruiterStatus,
} from "../../services/api/api";

const Recruiter = () => {
  const [recruiters, setRecruiters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecruiters = async () => {
      try {
        const response = await getRecruiters();
        if (response.data && response.data.length > 0) {
          setRecruiters(response.data);
        } else {
          setError("No Recruiters found.");
        }
      } catch (err) {
        setError("Error fetching job seekers.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecruiters();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await changeRecruiterStatus(id, newStatus);
      alert("Status updated successfully");
    } catch (err) {
      console.error("Error updating status: ", err);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Recruiters</h1>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : recruiters.length === 0 ? (
        <div className="text-center text-gray-500">No Recruiters found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recruiters.map((recruiter) => (
                <tr key={recruiter.id}>
                  <td className="px-4 py-2 border">{recruiter.id}</td>
                  <td className="px-4 py-2 border">{recruiter.name}</td>
                  <td className="px-4 py-2 border">{recruiter.email}</td>
                  <td className="px-4 py-2 border">
                    {recruiter.verificationStatus ? "Verified" : "Not Verified"}
                  </td>
                  <td className="px-4 py-2 border">
                    <button
                      className="bg-blue-500 text-white py-1 px-3 rounded"
                      onClick={() =>
                        handleStatusChange(
                          recruiter.id,
                          !recruiter.verificationStatus
                        )
                      }
                    >
                      {recruiter.verificationStatus ? "Deactivate" : "Activate"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Recruiter;
