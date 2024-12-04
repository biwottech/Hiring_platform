import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaRobot,
  FaFileInvoice,
  FaCreditCard,
  FaBox,
  FaBell,
  FaCog,
  FaUsers,
  FaList,
  FaClipboardList,
  FaTags,
  FaLayerGroup,
  FaBoxes,
  FaAddressBook,
  FaChartLine,
  FaExchangeAlt,
  FaNewspaper,
  FaUserTag,
  FaQuestionCircle,
  FaCalendar,
  FaFileAlt,
} from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";

const NavItem = ({ to, icon: Icon, children, onClick }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    onClick(); // Close the sidebar on mobile
    navigate(to); // Navigate to the new route
  };

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center px-4 py-2 text-sm font-medium ${
          isActive
            ? "bg-blue-800 text-white"
            : "text-blue-100 hover:bg-blue-600"
        }`
      }
      onClick={handleClick}
    >
      <Icon className="mr-3 h-6 w-6" />
      {children}
    </NavLink>
  );
};

const SidebarNavigation = ({ closeSidebar }) => {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";
  const isRecruiter = user?.role === "recruiter";
  const isJobseeker = user?.role === "jobseeker";

  const jobseekerNavItems = [
    { to: "/jobseeker/dashboard", icon: FaHome, label: "Dashboard" },
    {
      to: "/jobseeker/interview-prep",
      icon: FaRobot,
      label: "Interview Preparation",
    },
    { to: "/jobseeker/job-matches", icon: FaRobot, label: "Job Matches" },
    { to: "/jobseeker/messages", icon: FaTags, label: "Messages" },
    { to: "/jobseeker/schedule", icon: FaLayerGroup, label: "Schedule" },
    {
      to: "/jobseeker/subscriptions",
      icon: FaBox,
      label: "Payments & Subscription",
    },
    {
      to: "/jobseeker/help-center",
      icon: FaQuestionCircle,
      label: "Help Center",
    },
    { to: "/jobseeker/notifications", icon: FaBell, label: "Notifications" },
  ];

  const adminNavItems = [
    { to: "/admin/dashboard", icon: FaHome, label: "Dashboard" },
    { to: "/admin/recruiters", icon: FaUsers, label: "Recruiters" },
    { to: "/admin/job-seekers", icon: FaUsers, label: "Job Seekers" },
    { to: "/admin/users", icon: FaUsers, label: "Users" },
    { to: "/admin/features", icon: FaList, label: "Features" },
    { to: "/admin/skills", icon: FaList, label: "Skills" },
    { to: "/admin/industry", icon: FaCreditCard, label: "Industry" },
    { to: "/admin/education-level", icon: FaBox, label: "Education Level" },
    { to: "/admin/skill-levels", icon: FaBell, label: "Skill Level" },
    {
      to: "/admin/experience-duration",
      icon: FaCog,
      label: "Years Of Experience",
    },
    { to: "/admin/plans", icon: FaClipboardList, label: "Plans" },
    { to: "/admin/invoices", icon: FaFileInvoice, label: "Invoices" },
    { to: "/admin/payments", icon: FaCreditCard, label: "Payments" },
    { to: "/admin/subscriptions", icon: FaBox, label: "Subscriptions" },
    { to: "/admin/notifications", icon: FaBell, label: "Notifications" },
    { to: "/admin/settings", icon: FaCog, label: "Settings" },
  ];

  const recruiterNavItems = [
    { to: "/recruiter/dashboard", icon: FaHome, label: "Dashboard" },
    { to: "/recruiter/team", icon: FaUsers, label: "Team" },
    { to: "/recruiter/projects", icon: FaBoxes, label: "Projects Hub" },
    { to: "/recruiter/job-seekers", icon: FaUsers, label: "Job Seekers Hub" },
    { to: "/recruiter/messages", icon: FaAddressBook, label: "Messaging" },
    { to: "/recruiter/schedule", icon: FaCalendar, label: "Schedule" },
    { to: "/recruiter/feedback", icon: FaFileAlt, label: "Feedback & Notes" },
    {
      to: "/recruiter/subscriptions",
      icon: FaBox,
      label: "Payments & Subscription",
    },
    { to: "/recruiter/notifications", icon: FaBell, label: "Notifications" },
    {
      to: "/recruiter/help-center",
      icon: FaQuestionCircle,
      label: "Help Center",
    },
  ];

  const navItems = isAdmin
    ? adminNavItems
    : isRecruiter
    ? recruiterNavItems
    : jobseekerNavItems;

  return (
    <nav className="mt-5 flex-1 px-2 space-y-1">
      {navItems.map((item) => (
        <NavItem
          key={item.to}
          to={item.to}
          icon={item.icon}
          onClick={closeSidebar}
        >
          {item.label}
        </NavItem>
      ))}
    </nav>
  );
};

export default SidebarNavigation;
