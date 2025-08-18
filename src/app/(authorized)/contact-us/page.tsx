"use client"

import { useState } from "react"

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-950 pt-15">
        {/* Hero Section */}
        <div className="text-center py-12 sm:py-16 px-4">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">Contact Us</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-30">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              You Will Grow, You Will Succeed. We Promise That
            </h2>
            <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
              Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in lectus tincidunt tincidunt ultrices. Diam
              convallis morbi pellentesque adipiscing
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 ">
              {/* Call for inquiry */}
              <div className="group hover:bg-white hover:shadow-md rounded-lg p-4 transition-all duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-teal-100 group-hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors duration-200">
                    <svg
                      className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">Call for inquiry</h3>
                <a
                  href="tel:+2573886895"
                  className="text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors"
                >
                  +257 388-6895
                </a>
              </div>

              {/* Send us email */}
              <div className="group hover:bg-white hover:shadow-md rounded-lg p-4 transition-all duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-teal-100 group-hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors duration-200">
                    <svg
                      className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">Send us email</h3>
                <a
                  href="mailto:kramulous@sbcglobal.net"
                  className="text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors break-all"
                >
                  kramulous@sbcglobal.net
                </a>
              </div>

              {/* Opening hours */}
              <div className="group hover:bg-white hover:shadow-md rounded-lg p-4 transition-all duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-teal-100 group-hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors duration-200">
                    <svg
                      className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">Opening hours</h3>
                <p className="text-gray-700 text-sm font-medium">Mon - Fri: 10AM - 10PM</p>
              </div>

              {/* Office */}
              <div className="group hover:bg-white hover:shadow-md rounded-lg p-4 transition-all duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-teal-100 group-hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors duration-200">
                    <svg
                      className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">Office</h3>
                <p className="text-gray-700 text-sm font-medium">19 North Road Piscataway, NY 08854</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white shadow-sm border border-gray-200 p-6 sm:p-8 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Info</h3>
            <p className="text-gray-600 mb-6 text-sm">Nibh dis faucibus proin lacus tristique</p>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">First Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all duration-200 hover:border-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">Last Name</label>
                  <input
                    type="text"
                    placeholder="Your last name"
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all duration-200 hover:border-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">Email Address</label>
                <input
                  type="email"
                  placeholder="Your E-mail address"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all duration-200 hover:border-gray-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">Message</label>
                <textarea
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all duration-200 hover:border-gray-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 active:bg-teal-700 text-white py-3 px-6 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
