
import { NavItem, Job, JobType, User, UserRole, Application, ApplicationStatus } from './types';
import { SearchIcon, ClipboardListIcon, UserCircleIcon, BriefcaseIcon, ChartBarIcon, CogIcon, UsersIcon, ShieldCheckIcon, DocumentTextIcon } from './components/icons';

export const STUDENT_NAV_ITEMS: NavItem[] = [
  { name: 'Browse Jobs', href: '#', icon: SearchIcon },
  { name: 'My Applications', href: '#', icon: ClipboardListIcon },
  { name: 'Profile & Resume', href: '#', icon: UserCircleIcon },
];

export const EMPLOYER_NAV_ITEMS: NavItem[] = [
  { name: 'Dashboard', href: '#', icon: ChartBarIcon },
  { name: 'Manage Jobs', href: '#', icon: BriefcaseIcon },
  { name: 'Applicants', href: '#', icon: UsersIcon },
  { name: 'Company Profile', href: '#', icon: UserCircleIcon },
];

export const ADMIN_NAV_ITEMS: NavItem[] = [
  { name: 'Dashboard', href: '#', icon: ChartBarIcon },
  { name: 'Manage Users', href: '#', icon: UsersIcon },
  { name: 'Manage Jobs', href: '#', icon: ShieldCheckIcon },
  { name: 'Analytics', href: '#', icon: ChartBarIcon },
  { name: 'System Settings', href: '#', icon: CogIcon },
];

export const JOBS: Job[] = [
  { id: 'job-1', title: 'Frontend Developer', company: 'Innovate Inc.', location: 'New York, NY', type: JobType.FullTime, description: 'Developing and maintaining user-facing features using React.js.', datePosted: '2024-07-20', companyLogo: 'https://picsum.photos/seed/Innovate/100', isApproved: true },
  { id: 'job-2', title: 'UX/UI Designer', company: 'Creative Solutions', location: 'San Francisco, CA', type: JobType.FullTime, description: 'Designing engaging user experiences for web and mobile.', datePosted: '2024-07-19', companyLogo: 'https://picsum.photos/seed/Creative/100', isApproved: true },
  { id: 'job-3', title: 'Data Scientist Intern', company: 'DataDriven Co.', location: 'Remote', type: JobType.Internship, description: 'Assisting the data science team with data analysis and modeling.', datePosted: '2024-07-18', companyLogo: 'https://picsum.photos/seed/DataDriven/100', isApproved: true },
  { id: 'job-4', title: 'Backend Engineer', company: 'Tech Giants', location: 'Austin, TX', type: JobType.FullTime, description: 'Building scalable server-side applications and APIs.', datePosted: '2024-07-17', companyLogo: 'https://picsum.photos/seed/TechGiants/100', isApproved: true },
  { id: 'job-5', title: 'Product Manager', company: 'Innovate Inc.', location: 'New York, NY', type: JobType.FullTime, description: 'Lead the product development lifecycle from concept to launch.', datePosted: '2024-07-16', companyLogo: 'https://picsum.photos/seed/Innovate/100', isApproved: false },
  { id: 'job-6', title: 'Marketing Intern', company: 'Creative Solutions', location: 'Remote', type: JobType.Internship, description: 'Support marketing campaigns and social media presence.', datePosted: '2024-07-15', companyLogo: 'https://picsum.photos/seed/Creative/100', isApproved: true },
];

export const USERS: User[] = [
    { id: 'user-1', name: 'Alice Johnson', email: 'alice@example.com', role: UserRole.Student, dateJoined: '2024-01-15' },
    { id: 'user-2', name: 'Bob Williams', email: 'bob@innovate.com', role: UserRole.Employer, dateJoined: '2024-02-20' },
    { id: 'user-3', name: 'Charlie Brown', email: 'charlie@example.com', role: UserRole.Student, dateJoined: '2024-03-10' },
    { id: 'user-4', name: 'Diana Miller', email: 'diana@creative.com', role: UserRole.Employer, dateJoined: '2024-04-05' },
    { id: 'user-5', name: 'Admin User', email: 'admin@jobportal.com', role: UserRole.Admin, dateJoined: '2024-01-01' },
];

export const APPLICATIONS: Application[] = [
  { id: 'app-1', jobId: 'job-1', studentId: 'user-1', status: ApplicationStatus.Interviewing, dateApplied: '2024-07-21' },
  { id: 'app-2', jobId: 'job-3', studentId: 'user-1', status: ApplicationStatus.Pending, dateApplied: '2024-07-19' },
  { id: 'app-3', jobId: 'job-2', studentId: 'user-3', status: ApplicationStatus.Reviewed, dateApplied: '2024-07-20' },
  { id: 'app-4', jobId: 'job-4', studentId: 'user-3', status: ApplicationStatus.Rejected, dateApplied: '2024-07-18' },
];

export const getJobById = (id: string) => JOBS.find(job => job.id === id);
export const getUserById = (id: string) => USERS.find(user => user.id === id);
