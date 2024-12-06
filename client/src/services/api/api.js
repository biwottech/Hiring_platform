import axios from "axios";

// const API_BASE_URL = "http://localhost:3000/api/";

const api = axios.create({
  baseURL:  'http://100.20.66.175/api/',
  headers: {
    "Content-Type": "application/json", 
  },
});

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

// Request interceptor for adding the auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    console.log(error)

    console.log(originalRequest);
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const token = localStorage.getItem("token");
        localStorage.setItem("token", token);
        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        window.location.href = "/";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export const register = (userData) => api.post("/auth/register", userData);
export const login = (credentials) => api.post("/auth/login", credentials);
export const forgotPassword = (email) =>
  api.post("/auth/forgot-password", { email });
export const resetPassword = (token, newPassword) =>
  api.put(`/auth/reset-password/${token}`, { password: newPassword });
export const changePassword = (currentPassword, newPassword) =>
  api.put("/auth/change-password", { currentPassword, newPassword });
export const getCurrentUser = () => api.get("/auth/me");
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  window.location.href = "/signin";
};

export const checkAuth = async () => {
  if (isAuthenticated()) {
    try {
      await getCurrentUser();
      return true;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        logout();
      }
      return false;
    }
  }
  return false;
};

// Dashboard
export const getAdminDashboard = () => api.get("/api/dashboard");

// Recruiters
export const getRecruiters = () => api.get("/users/recruiters");
export const getRecruiterById = (id) => api.get(`/users/recruiters/${id}`);
export const changeRecruiterStatus = (id, status) =>
  api.patch(`/api/recruiters/${id}/status`, { status });

// Jobseekers
export const getJobseekers = () => api.get("/users/jobseekers");
export const getJobseekerById = (id) => api.get(`/users/jobseekers/${id}`);
export const changeJobseekerStatus = (id, status) =>
  api.patch(`/users/jobseekers/${id}/status`, { status });

// Admins
export const getAdmins = () => api.get("/users/admins");
export const getAdminById = (id) => api.get(`/users/admins/${id}`);
export const changeAdminStatus = (id, status) =>
  api.patch(`/users/admins/${id}/status`, { status });

// Features
export const fetchFeatures = () => api.get("/features");
export const getFeatureById = (id) => api.get(`/features/${id}`);
export const createFeature = (feature) => api.post("/features", feature);
export const updateFeature = (id, feature) =>
  api.put(`/features/${id}`, feature);
export const deleteFeature = (id) => api.delete(`/features/${id}`);
export const toggleFeatureStatus = (id, featureData) =>
  api.put(`/features/${id}`, featureData);

// Plans
export const getPlans = () => api.get("/plans");
export const fetchPlans = () => api.get("/plans");
export const getPlanById = (id) => api.get(`/plans/${id}`);
export const createPlan = (planData) => api.post("/plans", planData);
export const updatePlan = (id, planData) => api.put(`/plans/${id}`, planData);
export const togglePlanStatus = (id, planData) =>
  api.put(`/plans/${id}`, planData);
export const updatePlanFeatures = (id, planData) =>
  api.put(`/plans/${id}/features`, planData);
export const deletePlan = (id) => api.delete(`/plans/${id}`);

// Subscriptions
export const getSubscriptions = () => api.get("/subscriptions");
export const getActiveSubscription = () => api.get("/subscriptions/active");
export const fetchSubscriptions = () => api.get("/subscriptions");
export const createSubscription = (subscriptionData) =>
  api.post("/subscriptions", subscriptionData);
export const updateSubscription = (id, subscriptionData) =>
  api.put(`/subscriptions/${id}`, subscriptionData);
export const cancelSubscription = (id) =>
  api.post(`/subscriptions/${id}/cancel`);

export const createPayment = (paymentData) =>
  api.post("/subscriptions/subscribe", paymentData);

export const capturePayPalPayment = (orderId, status) =>
  api.post("/subscriptions/paypal-capture", { orderId, status });

// Invoices
export const getInvoices = () => api.get("/subscriptions/invoices");

// Payments
export const getPayments = () => api.get("/subscriptions/payments");

// Notifications
export const getNotifications = () => api.get("/notifications");
export const createNotification = (notification) =>
  api.post("/api/notifications", notification);
export const updateNotification = (id, notification) =>
  api.put(`/api/notifications/${id}`, notification);
export const deleteNotification = (id) =>
  api.delete(`/api/notifications/${id}`);

// Settings
export const getSettings = () => api.get("/api/settings");
export const updateSettings = (settings) => api.put("/api/settings", settings);

// Profile
export const getProfile = () => api.get("/api/profile");
export const updateProfile = (profile) => api.put("/api/profile", profile);

// Skills
export const fetchSkills = () => api.get("/skills");
export const getSkillById = (id) => api.get(`/skills/${id}`);
export const createSkill = (skill) => api.post("/skills", skill);
export const updateSkill = (id, skill) => api.put(`/skills/${id}`, skill);
export const deleteSkill = (id) => api.delete(`/skills/${id}`);
export const toggleSkillStatus = (id, skillData) =>
  api.put(`/skills/${id}`, skillData);

// Industrys
export const fetchIndustrys = () => api.get("/industries");
export const getIndustryById = (id) => api.get(`/industries/${id}`);
export const createIndustry = (skill) => api.post("/industries", skill);
export const updateIndustry = (id, skill) =>
  api.put(`/industries/${id}`, skill);
export const deleteIndustry = (id) => api.delete(`/industries/${id}`);
export const toggleIndustryStatus = (id, skillData) =>
  api.put(`/industries/${id}`, skillData);

// Skills Level
export const fetchSkillLevels = () => api.get("/skill-levels");
export const getSkillLevelById = (id) => api.get(`/skill-levels/${id}`);
export const createSkillLevel = (skill) => api.post("/skill-levels", skill);
export const updateSkillLevel = (id, skill) =>
  api.put(`/skill-levels/${id}`, skill);
export const deleteSkillLevel = (id) => api.delete(`/skill-levels/${id}`);
export const toggleSkillLevelStatus = (id, skillData) =>
  api.put(`/skill-levels/${id}`, skillData);

// Years of exeperience
export const fetchYearsOfExperiences = () => api.get("/years-of-experience");
export const getYearsOfExperienceById = (id) =>
  api.get(`/years-of-experience/${id}`);
export const createYearsOfExperience = (skill) =>
  api.post("/years-of-experience", skill);
export const updateYearsOfExperience = (id, skill) =>
  api.put(`/years-of-experience/${id}`, skill);
export const deleteYearsOfExperience = (id) =>
  api.delete(`/years-of-experience/${id}`);
export const toggleYearsOfExperienceStatus = (id, skillData) =>
  api.put(`/years-of-experience/${id}`, skillData);

// Education Level
export const fetchEducationLevels = () => api.get("/education-levels");
export const getEducationLevelById = (id) => api.get(`/education-levels/${id}`);
export const createEducationLevel = (skill) =>
  api.post("/education-levels", skill);
export const updateEducationLevel = (id, skill) =>
  api.put(`/education-levels/${id}`, skill);
export const deleteEducationLevel = (id) =>
  api.delete(`/education-levels/${id}`);
export const toggleEducationLevelStatus = (id, skillData) =>
  api.put(`/education-levels/${id}`, skillData);

// Fetch-only routes
export const getRecruiterDashboard = () => api.get("/recruiter/dashboard");
export const getHelpCenter = () => api.get("/recruiter/help-center");
export const getCandidates = () => api.get("/recruiter/candidates");

// CRUD routes
export const getTeam = () => api.get("/recruiter/team");
export const createTeam = (data) => api.post("/recruiter/team", data);
export const updateTeam = (id, data) => api.put(`/recruiter/team/${id}`, data);
export const deleteTeam = (id) => api.delete(`/recruiter/team/${id}`);

export const getMessages = () => api.get("/recruiter/messages");
export const createMessage = (data) => api.post("/recruiter/messages", data);
export const updateMessage = (id, data) =>
  api.put(`/recruiter/messages/${id}`, data);
export const deleteMessage = (id) => api.delete(`/recruiter/messages/${id}`);

export const getProjects = () => api.get("/recruiter/projects");
export const createProject = (data) => api.post("/recruiter/projects", data);
export const updateProject = (id, data) =>
  api.put(`/recruiter/projects/${id}`, data);
export const deleteProject = (id) => api.delete(`/recruiter/projects/${id}`);

export const getFeedback = () => api.get("/recruiter/feedback");
export const createFeedback = (data) => api.post("/recruiter/feedback", data);
export const updateFeedback = (id, data) =>
  api.put(`/recruiter/feedback/${id}`, data);
export const deleteFeedback = (id) => api.delete(`/recruiter/feedback/${id}`);

export const getSchedule = () => api.get("/recruiter/schedule");
export const createSchedule = (data) => api.post("/recruiter/schedule", data);
export const updateSchedule = (id, data) =>
  api.put(`/recruiter/schedule/${id}`, data);
export const deleteSchedule = (id) => api.delete(`/recruiter/schedule/${id}`);

// Company
export const getCompanies = () => api.get("/companies");
export const createCompany = (data) => api.post("/companies", data);
export const updateCompany = (id, data) => api.put(`/companies/${id}`, data);
export const deleteCompany = (id) => api.delete(`/companies/${id}`);
