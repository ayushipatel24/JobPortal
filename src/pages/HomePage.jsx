import React, { useState } from 'react';
import { Search, MapPin, Briefcase, FileText, CheckCircle, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  

  return (
    <div className="min-h-screen bg-[F5F7FF] ">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6  py-16 ">

        <div className="absolute inset-0">
        <img
          src="/bglines.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-20"
        />
        {/* White overlay (optional) */}
        <div className="absolute inset-0 bg-white/40"></div>
        </div>

        <div className="text-center relative">
          <p className="text-blue-600 mb-4">We Have 208,000+ Live Jobs</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your <span className="text-blue-600">Dream</span> Job Is Waiting For You
          </h1>
          <p className="text-gray-600 mb-8">
            Type your favorite. One-click search to find your perfect job
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-md p-4 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center border-r border-gray-200 px-3">
                <Search className="text-gray-400 mr-2" size={20} />
                <input
                  type="text"
                  placeholder="Job / Designation"
                  className="w-full outline-none"
                />
              </div>
              <div className="flex items-center border-r border-gray-200 px-3">
                <Briefcase className="text-gray-400 mr-2" size={20} />
                <input
                  type="text"
                  placeholder="Experience"
                  className="w-full outline-none"
                />
              </div>
              <div className="flex items-center border-r border-gray-200 px-3">
                <MapPin className="text-gray-400 mr-2" size={20} />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full outline-none"
                />
              </div>
              <button className="bg-[#2962FF] text-white px-6 py-3 rounded hover:bg-blue-700 font-medium">
                Find Job
              </button>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            <span className="font-semibold">Popular Searches:</span> Data Engineer, Gen AI Engineer, Data Scientist, Data Analytics, Ph...
          </div>
        </div>

        {/* Company Logos */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-40">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="text-gray-400 font-bold text-xl">Logo</div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-16 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 mb-2">How It Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Follow Easy 4 Steps
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-[#2962FF] w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Create Account</h3>
              <p className="text-gray-600 text-sm">
                
                Sign up to begin your data-science journey.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-[#2962FF] w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">CV/Resume</h3>
              <p className="text-gray-600 text-sm">
               Upload your resume for better job matches.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-[#2962FF] w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Search Jobs</h3>
              <p className="text-gray-600 text-sm">
                Explore top data-science and AI roles.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-[#2962FF] w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Apply Them</h3>
              <p className="text-gray-600 text-sm">
                Apply instantly to your preferred jobs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Registered Users Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-600 mb-2">Recent Job</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Over all 10,00+ Talented People Registered in Our Website
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 font-medium">
            Join Now
          </button>
        </div>
      </div>
      
    </div>
  );
}