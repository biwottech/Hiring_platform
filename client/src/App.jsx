// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import { AuthProvider, useAuth } from "./context/AuthContext";
// import PublicRoutes from "./routes/PublicRoutes";
// import RecruiterRoutes from "./routes/RecruiterRoutes";
// import JobSeekerRoutes from "./routes/JobSeekerRoutes";
// import AdminRoutes from "./routes/AdminRoutes";
// import MainLayout from "./layouts/MainLayout";
// import PublicLayout from "./layouts/PublicLayout";
// import ProtectedRoute from "./components/common/auth/ProtectedRoute";
// import RoleBasedRedirect from "./components/common/auth/RoleBasedRedirect";

// function App() {
//   const { loading } = useAuth();

//   if (loading) {
//     return <div>Loading...</div>; // Or a loading spinner
//   }

//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes with PublicLayout */}
//         <Route element={<PublicLayout />}>
//           {PublicRoutes.map((route, index) => (
//             <Route key={index} path={route.path} element={route.element} />
//           ))}
//         </Route>

//         {/* JobSeeker Routes with MainLayout */}
//         <Route element={<MainLayout />}>
//           {JobSeekerRoutes.map((route, index) => (
//             <Route
//               key={index}
//               path={route.path}
//               element={
//                 <ProtectedRoute role="job_seeker">{route.element}</ProtectedRoute>
//               }
//             />
//           ))}
//         </Route>

//         {/* Recruiter Routes with MainLayout */}
//         <Route element={<MainLayout />}>
//           {RecruiterRoutes.map((route, index) => (
//             <Route
//               key={index}
//               path={route.path}
//               element={
//                 <ProtectedRoute role="recruiter">{route.element}</ProtectedRoute>
//               }
//             />
//           ))}
//         </Route>

//         {/* Admin Routes with MainLayout */}
//         <Route element={<MainLayout />}>
//           {AdminRoutes.map((route, index) => (
//             <Route
//               key={index}
//               path={route.path}
//               element={
//                 <ProtectedRoute role="admin">{route.element}</ProtectedRoute>
//               }
//             />
//           ))}
//         </Route>

//         {/* Catch-all route */}
//         <Route path="*" element={<RoleBasedRedirect />} />
//       </Routes>
//     </Router>
//   );
// }

// function AppWithAuth() {
//   return (
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   );
// }

// export default AppWithAuth;



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/');
                // setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>API Data:</h1>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </div>
    );
};

export default App;

