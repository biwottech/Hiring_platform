import React from "react";
import Dashboard from "../pages/jobseeker/Dashboard";
import Plans from "../pages/jobseeker/Plans";
import Subscriptions from "../pages/jobseeker/Subscriptions";
import Invoices from "../pages/jobseeker/Invoices";
import Payments from "../pages/jobseeker/Payments";
import Notifications from "../pages/jobseeker/Notifications";
import Settings from "../pages/jobseeker/Settings";
import Profile from "../pages/jobseeker/Profile";
import VideoLibrary from "../pages/jobseeker/VideoLibrary";
import JobMatches from "../pages/jobseeker/JobMatches";
import Messages from "../pages/jobseeker/Messages";
import Schedule from "../pages/jobseeker/Schedule";
import HelpCenter from "../components/common/Help/HelpCenter";
import InterviewPrep from "../pages/jobseeker/InterviewPrep";
import Checkout from "../pages/jobseeker/Checkout ";

const jobseekerRoutes = [
  { path: "/jobseeker/dashboard", element: <Dashboard /> },
  { path: "/jobseeker/video-library", element: <VideoLibrary /> },
  { path: "/jobseeker/interview-prep", element: <InterviewPrep /> },
  { path: "/jobseeker/job-matches", element: <JobMatches /> },
  { path: "/jobseeker/messages", element: <Messages /> },
  { path: "/jobseeker/schedule", element: <Schedule /> },
  { path: "/jobseeker/plans", element: <Plans /> },
  { path: "/jobseeker/subscriptions", element: <Subscriptions /> },
  {
    path: "/checkout/:planId/:billingFrequency",
    element: <Checkout />,
    key: "checkout",
  },
  { path: "/jobseeker/invoices", element: <Invoices /> },
  { path: "/jobseeker/payments", element: <Payments /> },
  { path: "/jobseeker/notifications", element: <Notifications /> },
  { path: "/jobseeker/settings", element: <Settings /> },
  { path: "/jobseeker/profile", element: <Profile /> },
  { path: "/jobseeker/help-center", element: <HelpCenter /> },
];

export default jobseekerRoutes;
