
import React, { useState } from 'react';
import DashboardCard from '../components/DashboardCard';
import { UsersIcon, BriefcaseIcon, ShieldCheckIcon, ChartBarIcon } from '../components/icons';
import { USERS, JOBS } from '../constants';
import { UserRole } from '../types';

type AdminTab = 'users' | 'jobs';

const AdminDashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState<AdminTab>('users');

    return (
        <div className="space-y-8">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <DashboardCard title="Total Users" value={USERS.length.toString()} icon={UsersIcon} change="+5" changeType="increase" />
                <DashboardCard title="Total Jobs" value={JOBS.length.toString()} icon={BriefcaseIcon} change="+10" changeType="increase" />
                <DashboardCard title="Pending Approvals" value={JOBS.filter(j => !j.isApproved).length.toString()} icon={ShieldCheckIcon} />
                <DashboardCard title="Platform Growth" value="+15%" icon={ChartBarIcon} changeType="increase" />
            </div>

            <div>
                <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        <button
                            onClick={() => setActiveTab('users')}
                            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                                activeTab === 'users'
                                ? 'border-primary-500 text-primary-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200'
                            }`}
                        >
                            Manage Users
                        </button>
                        <button
                            onClick={() => setActiveTab('jobs')}
                            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                                activeTab === 'jobs'
                                ? 'border-primary-500 text-primary-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200'
                            }`}
                        >
                            Manage Jobs
                        </button>
                    </nav>
                </div>
                
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-x-auto">
                    {activeTab === 'users' && (
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                             <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">User</th>
                                    <th scope="col" className="px-6 py-3">Role</th>
                                    <th scope="col" className="px-6 py-3">Date Joined</th>
                                    <th scope="col" className="px-6 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {USERS.map(user => (
                                    <tr key={user.id} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{user.name} <br/> <span className="text-gray-500 font-normal">{user.email}</span></td>
                                        <td className="px-6 py-4">{user.role}</td>
                                        <td className="px-6 py-4">{user.dateJoined}</td>
                                        <td className="px-6 py-4 space-x-2">
                                            <button className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Edit</button>
                                            <button className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {activeTab === 'jobs' && (
                         <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                             <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Job Title</th>
                                    <th scope="col" className="px-6 py-3">Company</th>
                                    <th scope="col" className="px-6 py-3">Status</th>
                                    <th scope="col" className="px-6 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {JOBS.map(job => (
                                    <tr key={job.id} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{job.title}</td>
                                        <td className="px-6 py-4">{job.company}</td>
                                        <td className="px-6 py-4">
                                             <span className={`px-2 py-1 font-semibold text-xs rounded-full ${job.isApproved ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'}`}>
                                                {job.isApproved ? 'Approved' : 'Pending'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 space-x-2 whitespace-nowrap">
                                            {!job.isApproved && <button className="font-medium text-green-600 dark:text-green-500 hover:underline">Approve</button>}
                                            <button className="font-medium text-primary-600 dark:text-primary-500 hover:underline">View</button>
                                            <button className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
