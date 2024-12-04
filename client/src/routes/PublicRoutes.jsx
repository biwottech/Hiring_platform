import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import Home from "../pages/public/Home";
import Pricing from "../pages/public/Pricing";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import Recruiters from "../pages/public/Recruiters";
import Jobseekers from "../pages/public/Jobseekers";

import JobseekerLogin from "../pages/auth/JobseekerLogin";
import AdminLogin from "../pages/auth/AdminLogin";
import RecruiterLogin from "../pages/auth/RecruiterLogin";
import RegisterJobSeeker from "../pages/auth/RegisterJobSeeker";
import RegisterRecruiter from "../pages/auth/RegisterRecruiter";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
// import VerifyEmail from "../pages/auth/VerifyEmail";

const PublicRoutes = [
  { path: "/", element: <Home />, key: "home" },
  { path: "/pricing", element: <Pricing />, key: "pricing" },
  { path: "/about", element: <About />, key: "about" },
  { path: "/contact", element: <Contact />, key: "contact" },
  { path: "/recruiters", element: <Recruiters />, key: "recruiters" },
  { path: "/job-seekers", element: <Jobseekers />, key: "jobseekers" },

  {
    path: "/jobseeker/login",
    element: <JobseekerLogin />,
    key: "jobseeker-login",
  },
  { path: "/admin/login", element: <AdminLogin />, key: "admin-login" },
  {
    path: "/recruiter/login",
    element: <RecruiterLogin />,
    key: "recruiter-login",
  },

  {
    path: "/jobseeker/register",
    element: <RegisterJobSeeker />,
    key: "signup-job-seeker",
  },
  {
    path: "/recruiter/register",
    element: <RegisterRecruiter />,
    key: "signup-recruiter",
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    key: "forgot-password",
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
    key: "reset-password",
  },
  // { path: "/verify-email", element: <VerifyEmail />, key: "verify-email" },
];

export default PublicRoutes;
