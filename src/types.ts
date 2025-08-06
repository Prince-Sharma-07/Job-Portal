import { Company, Job, User } from "../generated/prisma";

export type JobWithCompany = {job : Job & {company : Company}}
export type JobWithCompanyWithOwner = {job : Job & {company : Company & {owner : User}}}
export type CompanyWithJobs = {company : Company & {jobs : Job[]}}
