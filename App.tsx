
import React, { useState, useMemo } from 'react';
import { UserRole } from './types';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StudentDashboard from './pages/StudentDashboard';
import EmployerDashboard from './pages/EmployerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import { BriefcaseIcon } from './components/icons';

const App: React.FC = () => {
  const [currentUserRole, setCurrentUserRole] = useState<UserRole>(UserRole.Student);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const DashboardComponent = useMemo(() => {
    switch (currentUserRole) {
      case UserRole.Student:
        return <StudentDashboard />;
      case UserRole.Employer:
        return <EmployerDashboard />;
      case UserRole.Admin:
        return <AdminDashboard />;
      default:
        return <div className="text-center p-8">Invalid user role.</div>;
    }
  }, [currentUserRole]);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-sans">
      <Sidebar userRole={currentUserRole} isOpen={isSidebarOpen} setOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          userRole={currentUserRole} 
          setUserRole={setCurrentUserRole}
          toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 lg:p-8">
          {DashboardComponent}
        </main>
      </div>
    </div>
  );
};

export default App;
