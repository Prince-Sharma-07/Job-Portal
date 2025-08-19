"use client";
import { useUserContext } from "@/contexts/UserContextProvider";
import { Edit } from "lucide-react";
import Link from "next/link";

// Mock data - replace with actual data from your database
// const userData = {
//   id: "64f8b1a2c3d4e5f6g7h8i9j0",
//   name: "John Smith",
//   email: "john.smith@example.com",
//   company: {
//     name: "Tech Solutions Inc."
//   },
//   reviews: [
//     { id: "1", rating: 5, comment: "Excellent work quality and timely delivery" },
//     { id: "2", rating: 4, comment: "Good communication and professional approach" },
//     { id: "3", rating: 5, comment: "Highly skilled and reliable team member" }
//   ],
//   applications: [
//     { id: "1", jobTitle: "Frontend Developer", company: "StartupXYZ", status: "Under Review", appliedDate: "2024-08-15" },
//     { id: "2", jobTitle: "React Developer", company: "TechCorp", status: "Shortlisted", appliedDate: "2024-08-10" },
//     { id: "3", jobTitle: "Full Stack Developer", company: "WebSolutions", status: "Rejected", appliedDate: "2024-08-05" }
//   ]
// }

export default function ProfilePage() {
  const { userData } = useUserContext();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-black pt-15">
       
        {/* Hero Section */}
        <div className="text-center py-12 md:py-16">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            My Profile
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header Card */}
          <div className="dark:bg-white/10 rounded-xl p-6 mb-8 shadow-sm border flex items-start md:items-center justify-between">
            <div className="flex max-md:flex-col md:items-center gap-6">
              <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  {userData?.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {userData?.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-1">{userData?.email}</p>
                {userData?.company && (
                  <p className="text-teal-600 font-medium">
                    at {userData.company.companyName}
                  </p>
                )}
              </div>
            </div>
            
              <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 md:px-6 md:py-2 rounded text-sm font-medium transition-colors">
                <Edit /><span className="max-md:hidden">Edit Profile</span>
              </button>
            
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Personal Information */}
              <div className="dark:bg-white/10 rounded-xl p-6 shadow-sm border">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Personal Information
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300 text-sm">Full Name:</span>
                    <span className="text-gray-900 dark:text-gray-300 text-sm font-medium">
                      {userData?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300 text-sm">Email:</span>
                    <span className="text-gray-900 dark:text-gray-300 text-sm font-medium">
                      {userData?.email}
                    </span>
                  </div>
                  {userData?.company && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300 text-sm">Company:</span>
                        <span className="text-gray-900 dark:text-gray-300 text-sm font-medium">
                          {userData.company.companyName}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Reviews Section */}
              <div className="dark:bg-white/10 flex flex-col gap-3 rounded-xl px-6 py-3 h-44 shadow-sm border overflow-auto">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Reviews ({userData?.reviews.length})
                </h3>
                <div className="space-y-2">
                  {userData?.reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-gray-500 pb-1 last:border-b-0 last:pb-0"
                    >
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {review.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Job Applications */}
              <div className="dark:bg-white/10 flex flex-col gap-3 rounded-xl px-6 py-3 shadow-sm border h-44 overflow-auto">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Jobs Applied ({userData?.applications.length})
                </h3>
                <div className="flex flex-col gap-3">
                  {userData?.applications.map((application) => (
                    <Link
                      href={"/jobs/" + application.job_id}
                      key={application.id}
                    >
                      <div className="border border-gray-200 rounded-lg p-2 ">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-base font-semibold text-gray-900 dark:text-gray-300">
                            {application?.job.job_title}
                          </h4>
                        </div>
                        <p className="text-gray-600 dark:text-teal-600 text-sm mb-2">
                          {application.job.company.companyName}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="dark:bg-white/10 rounded-xl p-6 shadow-sm border mt-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 dark:bg-white/20 rounded-lg">
                    <div className="text-2xl font-bold text-teal-600">
                      {userData?.applications.length}
                    </div>
                    <div className="text-gray-600 dark:text-white text-sm">Applications</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-white/20 rounded-lg">
                    <div className="text-2xl font-bold text-teal-600">
                      {userData?.reviews.length}
                    </div>
                    <div className="text-gray-600 dark:text-white text-sm">Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
