
import React from 'react';
import { UserRole } from '../types';
import { UserCircleIcon, MenuIcon } from './icons';

interface HeaderProps {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ userRole, setUserRole, toggleSidebar }) => {
  const getRoleColor = (role: UserRole) => {
    switch (role) {
      case UserRole.Student: return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case UserRole.Employer: return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case UserRole.Admin: return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
    }
  };

  return (
    <header className="flex-shrink-0 bg-white dark:bg-gray-900 shadow-md">
      <div className="flex items-center justify-between p-2 sm:p-4">
        <div className="flex items-center">
            <button onClick={toggleSidebar} className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                <MenuIcon className="h-6 w-6" />
            </button>
            <div className="ml-4 hidden sm:block">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Dashboard</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Welcome back, {userRole}!</p>
            </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Role Switcher for Demo */}
          <div className="relative">
            <select
              id="role-switcher"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value as UserRole)}
              className="appearance-none block w-full bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 pl-3 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-800 focus:border-primary-500"
            >
              {Object.values(UserRole).map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getRoleColor(userRole)}`}>
              {userRole}
            </span>
            <UserCircleIcon className="h-9 w-9 text-gray-400 dark:text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
