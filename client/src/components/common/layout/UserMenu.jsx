import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaChevronDown,
} from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, loading } = useAuth();
  const ref = useRef();
  useOnClickOutside(ref, () => setIsOpen(false));
 
  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="relative" ref={ref}>
      <button
        className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          className="h-8 w-8 rounded-full"
          src={user.avatar || "https://via.placeholder.com/40"}
          alt={user.firstName || "User"}
        />
        <span className="ml-2 text-gray-700 font-medium hidden md:block">
          {user.firstName || "User"}
        </span>
        <FaChevronDown className="ml-1 text-gray-400" />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-4 py-2 text-xs text-gray-400">Signed in as</div>
          <div className="px-4 py-2 text-sm font-medium text-gray-900 truncate">
            {user.email || "No email provided"}
          </div>
          <div className="border-t border-gray-100"></div>
          <Link
            to={`/${user.role}/profile`}
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            <FaUserCircle className="mr-2" />
            Your Profile
          </Link>
          <Link
            to="/settings"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            <FaCog className="mr-2" />
            Settings
          </Link>
          <div className="border-t border-gray-100"></div>
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <FaSignOutAlt className="mr-2" />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
