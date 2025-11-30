import React, { useState, useEffect } from 'react';
import { Search, MapPin, Briefcase, FileText, CheckCircle, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function HomePage() {
  const logos = [
    "/logos/ad1.png",
    "/logos/de1.png",
    "/logos/del1.png",
    "/logos/f1.png",
    "/logos/g1.png",
    "/logos/h1.png",
    "/logos/k1.png",
    "/logos/p1.png",
    "/logos/pp1.png",
  ];

  const animationDuration = `${logos.length * 5}s`;

  return (
    <div className="min-h-screen bg-[F5F7FF]">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        
        <div className="absolute inset-0">
          <img
            src="/bgglines.jpg"
            alt="Hero Background"
            className="w-full h-full md:h-120 object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-blue/20"></div>
        </div>

        <div className="text-center relative">
          <p className="text-blue-600 mb-2 mt-28 text-sm md:text-base">
            We Have 208,000+ Live Jobs
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Your <span className="text-blue-600">Dream</span> Job Is Waiting For You
          </h1>

          <p className="text-blue-600 mb-4 text-sm md:text-sm">
            Type your favorite. One-click search to find your perfect job
          </p>

          {/* Search Bar */}
          <div className="bg-white shadow-md p-3 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="flex items-center border-r border-gray-200 px-2">
                <Search className="text-gray-400 mr-2" size={18} style={{ color: "#2962FF" }} />
                <input
                  type="text"
                  placeholder="Skills / Designation"
                  className="w-full outline-none text-sm"
                />
              </div>

              <div className="flex items-center border-r border-gray-200 px-2">
                <Briefcase className="text-gray-400 mr-2" size={18} style={{ color: "#2962FF" }} />
                <input
                  type="text"
                  placeholder="Experience"
                  className="w-full outline-none text-sm"
                />
              </div>

              <div className="flex items-center border-r border-gray-200 px-2">
                <MapPin className="text-gray-400 mr-2" size={18} style={{ color: "#2962FF" }} />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full outline-none text-sm"
                />
              </div>

              <button className="bg-[#2962FF] text-white px-4 py-2 hover:bg-blue-700 rounded font-medium text-sm">
                Find Job
              </button>
            </div>
          </div>

          <div className="mt-2 text-xs md:text-sm text-gray-600">
            <span className="font-semibold">Popular Searches:</span> Data Engineer, Gen AI Engineer,
            Data Scientist, Analytics...
          </div>
        </div>
      </div>

      {/* Logo Carousel */}
      {/* <div className="bg-white mt-6">
        <div className="py-6">
          <style>{`
            @keyframes scroll-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .logo-track { display:flex; align-items:center; }
          `}</style>

          <div className="flex justify-center items-center overflow-hidden w-full">
            <div
              className="logo-track"
              style={{
                gap: '2rem',
                animation: `scroll-left ${animationDuration} linear infinite`
              }}
            >
              {[...logos, ...logos].map((logo, idx) => (
                <div key={idx} className="flex-shrink-0 w-28 h-16 flex justify-center items-center">
                  <img src={logo} alt="" className="h-10 w-20 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Logo Carousel */}
<div className="bg-white mt-4">
  <div className="py-6">
    <style>{`
      /* keyframes: move left by 50% of the track (we duplicate content) */
      @keyframes scroll-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

      /* wrapper hides overflow */
      .carousel-viewport { overflow: hidden; width: 100%; }

      /* track holds two identical sets inline and is animated */
      .carousel-track {
        display: flex;
        align-items: center;
        /* no gap: use per-item margin for consistent sizing */
        animation: scroll-left ${animationDuration} linear infinite;
        will-change: transform;
      }

      /* one set of logos (we will render two sets) */
      .logo-set { display: flex; align-items: center; }

      /* each item must not shrink and have consistent margin (right) */
      .logo-item {
  flex: 0 0 auto;
  width: 7rem;       /* same as w-28 */
  height: 4rem;      /* same as h-16 */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
}

.logo-item img {
  display: block;
  width: 5rem;       /* same as w-20 */
  height: 2.5rem;    /* same as h-10 */
  object-fit: contain;
}

    `}</style>

    <div className="carousel-viewport">
      <div
        className="carousel-track"
        /* animation inline handled by CSS above using animationDuration var */
      >
        {/* first set */}
        <div className="logo-set">
          {logos.map((logo, idx) => (
            <div key={`a-${idx}`} className="logo-item">
              <img src={logo} alt={`logo-${idx}`} />
            </div>
          ))}
        </div>

        {/* second set (duplicate) */}
        <div className="logo-set">
          {logos.map((logo, idx) => (
            <div key={`b-${idx}`} className="logo-item">
              <img src={logo} alt={`logo-dup-${idx}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>



        {/* How it Works */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 mb-1 mt-10">How It Works</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Follow Easy 4 Steps
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              It is a long established fact that a reader will be distracted by the <br />readable content of a page when looking at its layout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {/* Step 1 */}
            <div className="bg-white shadow-xl rounded-lg p-6 text-center hover:shadow-2xl transition-shadow ">
              <div className="bg-[#2962FF] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">Create Account</h3>
              <p className="text-gray-600 text-sm">Sign up to begin your journey.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white shadow-xl rounded-lg p-6 text-center hover:shadow-2xl transition-shadow ">
              <div className="bg-[#2962FF] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-3">
                <FileText className="text-white" size={22} />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">CV/Resume</h3>
              <p className="text-gray-600 text-sm">Upload your resume.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white shadow-xl rounded-lg p-6 text-center hover:shadow-2xl transition-shadow ">
              <div className="bg-[#2962FF] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Search className="text-white" size={22} />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">Search Jobs</h3>
              <p className="text-gray-600 text-sm">Explore the best roles.</p>
            </div>

            {/* Step 4 */}
            <div className="bg-white shadow-xl rounded-lg p-6 text-center hover:shadow-2xl transition-shadow ">
              <div className="bg-[#2962FF] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="text-white" size={22} />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">Apply Then</h3>
              <p className="text-gray-600 text-sm">Apply instantly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Registered Users Section */}
      <div className="bg-white-50 py-10 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-600 mb-2 text-sm">Recent Job</p>
          <h2 className="text 4xl md:text-4xl font-bold text-gray-900 mb-3">
            Over 1000+ Talented People Registered in Our <br /> Website
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm mb-6">
            It is a long established fact that a reader will be distracted by the <br />readable content of a page when looking at its layout.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-medium">
            Join Now
          </button>
        </div>
      </div>

    </div>
  );
}
