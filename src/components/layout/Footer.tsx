import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
           
            <div className="sm:col-span-2 lg:col-span-1 lg:pr-4">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-[#309689] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xl font-semibold">Job Portal</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm lg:max-w-xs">
                Connecting talent with opportunity. Helping job seekers find
                their dream roles and employers discover the right candidates.
              </p>
            </div>

            
            <div className="min-w-0">
              <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
              <nav>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block py-1"
                    >
                      Get Started
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block py-1"
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

        
            <div className="min-w-0">
              <h3 className="text-lg font-semibold mb-6 text-white">
                Coming Soon
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                More features and categories will be added in future updates.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 lg:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Job Portal. Developed by Prince Sharma
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
