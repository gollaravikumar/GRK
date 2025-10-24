
import React from 'react';
import DashboardCard from '../components/DashboardCard';
import { BriefcaseIcon, UsersIcon, ChartBarIcon, DocumentTextIcon } from '../components/icons';
import { JOBS, APPLICATIONS, getUserById } from '../constants';

const EmployerDashboard: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <DashboardCard title="Active Jobs" value="4" icon={BriefcaseIcon} change="+2" changeType="increase" />
                <DashboardCard title="Total Applicants" value="132" icon={UsersIcon} change="+15" changeType="increase" />
                <DashboardCard title="Interviews Today" value="5" icon={DocumentTextIcon} />
                <DashboardCard title="Avg. Response Time" value="2 days" icon={ChartBarIcon} change="-8%" changeType="decrease" />
            </div>

            <section>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Manage Job Listings</h3>
                    <button className="px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors">
                        Post New Job
                    </button>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Job Title</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3">Applicants</th>
                                <th scope="col" className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {JOBS.slice(0, 4).map((job) => (
                                <tr key={job.id} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{job.title}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 font-semibold text-xs rounded-full ${job.isApproved ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'}`}>
                                            {job.isApproved ? 'Active' : 'Pending'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">{APPLICATIONS.filter(a => a.jobId === job.id).length}</td>
                                    <td className="px-6 py-4 space-x-2">
                                        <button className="font-medium text-primary-600 dark:text-primary-500 hover:underline">View</button>
                                        <button className="font-medium text-yellow-600 dark:text-yellow-500 hover:underline">Edit</button>
                                        <button className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            
            <section>
                 <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Recent Applicants</h3>
                 <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Applicant Name</th>
                                <th scope="col" className="px-6 py-3">Applying For</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {APPLICATIONS.map((app) => {
                                const user = getUserById(app.studentId);
                                const job = JOBS.find(j => j.id === app.jobId);
                                if (!user || !job) return null;
                                return (
                                <tr key={app.id} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{user.name}</td>
                                    <td className="px-6 py-4">{job.title}</td>
                                    <td className="px-6 py-4">{app.status}</td>
                                    <td className="px-6 py-4 space-x-2">
                                        <button className="font-medium text-primary-600 dark:text-primary-500 hover:underline">View Profile</button>
                                        <button className="font-medium text-green-600 dark:text-green-500 hover:underline">Contact</button>
                                    </td>
                                </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default EmployerDashboard;
