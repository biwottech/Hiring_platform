import React from 'react';
import { FaBars } from 'react-icons/fa';
import UserMenu from './UserMenu';

const HeaderNav = ({ setSidebarOpen }) => {
  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 bg-blue-600 shadow">
      <button
        type="button"
        className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <FaBars className="h-6 w-6" />
      </button>
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex">
          {/* Add search bar or other header content here */}
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <UserMenu />
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
