// FIX: Import React to resolve 'Cannot find namespace React' error.
import React from 'react';

export enum UserRole {
  Student = 'Student',
  Employer = 'Employer',
  Admin = 'Admin',
}

export interface NavItem {
  name: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export enum JobType {
  FullTime = 'Full-time',
  PartTime = 'Part-time',
  Internship = 'Internship',
  Contract = 'Contract',
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: JobType;
  description: string;
  datePosted: string;
  companyLogo: string;
  isApproved?: boolean;
}

export enum ApplicationStatus {
  Pending = 'Pending',
  Reviewed = 'Reviewed',
  Interviewing = 'Interviewing',
  Offered = 'Offered',
  Rejected = 'Rejected',
}

export interface Application {
  id: string;
  jobId: string;
  studentId: string;
  status: ApplicationStatus;
  dateApplied: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  dateJoined: string;
}