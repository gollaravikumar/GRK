
import React, { useMemo } from 'react';
import { UserRole, NavItem } from '../types';
import { STUDENT_NAV_ITEMS, EMPLOYER_NAV_ITEMS, ADMIN_NAV_ITEMS } from '../constants';
import { BriefcaseIcon, XIcon } from './icons';

interface SidebarProps {
  userRole: UserRole;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ userRole, isOpen, setOpen }) => {
  const navItems: NavItem[] = useMemo(() => {
    switch (userRole) {
      case UserRole.Student:
        return STUDENT_NAV_ITEMS;
      case UserRole.Employer:
        return EMPLOYER_NAV_ITEMS;
      case UserRole.Admin:
        return ADMIN_NAV_ITEMS;
      default:
        return [];
    }
  }, [userRole]);

  return (
    <>
      <div className={`fixed inset-0 z-30 bg-gray-900/50 transition-opacity lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setOpen(false)}></div>
      <aside className={`fixed top-0 left-0 z-40 lg:relative lg:translate-x-0 w-64 h-screen bg-white dark:bg-gray-900 shadow-lg lg:shadow-none transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <a href="#" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400">
            <BriefcaseIcon className="h-8 w-8" />
            <span className="text-2xl font-bold">JobPro</span>
          </a>
          <button onClick={() => setOpen(false)} className="lg:hidden text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
             <XIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4">
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className="mb-2">
                <a
                  href={item.href}
                  className="flex items-center p-3 text-base font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group transition-colors duration-200"
                >
                  <item.icon className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200" />
                  <span className="ml-3">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
