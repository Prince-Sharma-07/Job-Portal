import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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
                <span className="text-xl font-semibold">Job</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm lg:max-w-xs">
                Quis enim pellentesque viverra tellus eget malesuada facilisis.
                Congue nibh vivamus aliquet nunc mauris d...
              </p>
            </div>

          
            <div className="min-w-0">
              <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
              <nav>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block py-1"
                      aria-label="About Us"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block py-1"
                      aria-label="Our Team"
                    >
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block py-1"
                      aria-label="Partners"
                    >
                      Partners
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block py-1"
                      aria-label="For Candidates"
                    >
                      For Candidates
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block py-1"
                      aria-label="For Employers"
                    >
                      For Employers
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="min-w-0">
              <h3 className="text-lg font-semibold mb-6 text-white">
                Job Categories
              </h3>
              <nav>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block py-1"
                      aria-label="Telecommunications Jobs"
                    >
                      Telecommunications
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block py-1"
                      aria-label="Hotels & Tourism Jobs"
                    >
                      Hotels & Tourism
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block py-1"
                      aria-label="Construction Jobs"
                    >
                      Construction
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block py-1"
                      aria-label="Education Jobs"
                    >
                      Education
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block py-1"
                      aria-label="Financial Services Jobs"
                    >
                      Financial Services
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="min-w-0 sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6 text-white">
                Newsletter
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Eu nunc pretium vitae platea. Non netus elementum vulputate
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#309689] focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#309689] hover:bg-[#278e81] active:bg-[#236f65] text-white py-3 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#309689] focus:ring-offset-2 focus:ring-offset-black"
                >
                  Subscribe now
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 lg:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              © Copyright Job Portal 2024. Designed by Figma.guru
            </p>
            <nav className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200 underline text-center"
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200 underline text-center"
                aria-label="Terms & Conditions"
              >
                Terms & Conditions
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
