import { Company, Job, Review, User } from "../generated/prisma";

export type JobWithCompany = Job & {company : Company}
export type JobWithCompanyWithOwner = Job & {company? : Company & {owner? : User}}
export type CompanyWithJobs = {company : Company & {jobs : Job[]}}
export type CompanyWithJobsAndOwnerWithReview =  Company & {jobs : Job[]; owner : User & {review : Review[]}}
export type CompanyWithOwner = Company & {owner : User}
export type UserWithCompany = User & {company : Company} | undefined
export type ThemeContextType = { isDark: boolean; setIsDark: (val: boolean) => void;
};