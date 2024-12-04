import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/common/layout/HeaderNav";
import Sidebar from "../components/common/layout/Sidebar";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <DashboardHeader setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <Outlet /> {/* Render nested routes */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
