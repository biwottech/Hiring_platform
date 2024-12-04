import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 
import { useAuth} from "../../context/AuthContext";

const RecruiterLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    role: "recruiter",
  }); 

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(credentials); 
      navigate("/recruiter/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred during login."
      );
    }
  };

  const handleLinkedInLogin = async () => {
    console.log("LinkedIn login clicked");
    // const data = await linkedInLogin("Recruiter");
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
        <p className="text-center text-gray-600">Sign in to your account</p>
        {error && <p className="text-center text-red-500">{error}</p>}
        <button
          onClick={handleLinkedInLogin}
          className="w-full py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700 flex items-center justify-center space-x-2"
        >
          <FaLinkedin />
          <span>Sign in with LinkedIn</span>
        </button>
        <div className="flex items-center justify-center mt-4">
          <span className="w-1/5 border-b"></span>
          <span className="px-3 text-sm text-gray-500">Or continue with</span>
          <span className="w-1/5 border-b"></span>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              placeholder="you@example.com"
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="••••••••"
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 text-sm text-gray-600"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="/forgot-password"
                className="text-blue-600 hover:text-blue-500"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Sign in
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a
            href="/recruiter/register"
            className="text-blue-600 hover:text-blue-500"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default RecruiterLogin;
