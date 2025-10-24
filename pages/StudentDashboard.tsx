
import React from 'react';
import { JOBS, APPLICATIONS, getJobById } from '../constants';
import { Job } from '../types';
import { SearchIcon } from '../components/icons';

const JobCard: React.FC<{ job: Job }> = ({ job }) => (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <div className="p-6">
            <div className="flex items-center mb-4">
                <img src={job.companyLogo} alt={`${job.company} logo`} className="h-12 w-12 rounded-full mr-4 object-cover" />
                <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{job.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{job.company}</p>
                </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">{job.location}</p>
            <p className="text-sm text-gray-700 dark:text-gray-200 line-clamp-2 mb-4">{job.description}</p>
            <div className="flex justify-between items-center">
                <span className="text-xs font-semibold bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 px-2 py-1 rounded-full">{job.type}</span>
                <button className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors">
                    Apply Now
                </button>
            </div>
        </div>
    </div>
);


const StudentDashboard: React.FC = () => {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Find Your Next Opportunity</h2>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search by title, company, or keyword..."
                        className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                </div>
            </div>

            <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Recommended For You</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {JOBS.filter(j => j.isApproved).slice(0,6).map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            </section>
            
            <section>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">My Applications</h3>
                 <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Job Title</th>
                                <th scope="col" className="px-6 py-3">Company</th>
                                <th scope="col" className="px-6 py-3">Date Applied</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {APPLICATIONS.map((app) => {
                                const job = getJobById(app.jobId);
                                if (!job) return null;
                                return (
                                    <tr key={app.id} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{job.title}</td>
                                        <td className="px-6 py-4">{job.company}</td>
                                        <td className="px-6 py-4">{app.dateApplied}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 font-semibold leading-tight text-xs rounded-full ${
                                                app.status === 'Interviewing' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                                                app.status === 'Pending' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                                                app.status === 'Rejected' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                                                'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                            }`}>{app.status}</span>
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

export default StudentDashboard;
