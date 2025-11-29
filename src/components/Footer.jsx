import React from 'react'
import { Search, MapPin, Briefcase, FileText, CheckCircle, Menu, X } from 'lucide-react';

function Footer() {
  return (
    <footer className="w-full bg-[#F3F6FF]">
        {/* CTA Section */}
        <div className="bg-[#2962FF] py-8 mx-4 sm:mx-6 lg:mx-8 my-8 rounded-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-white mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Let's Get Connected And Start</h3>
              <p className="text-xl">Finding Your Dream Job</p>
            </div>
            <button className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-gray-100 font-medium">
              Click Here
            </button>
          </div>
        </div>

        {/* Footer Content */}
       
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-26 py-12 bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-[#2962FF] w-8 h-8 rounded flex items-center justify-center mr-2">
                  <Briefcase className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold">DataXhire/<span className="text-blue-600">Job</span></span>
              </div>
              <p className="text-gray-600 text-sm">
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below.
              </p>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Useful Links</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-blue-600">Find a Job</a></li>
                <li><a href="#" className="hover:text-blue-600">Companies</a></li>
                <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600">Post a Job</a></li>
                <li><a href="#" className="hover:text-blue-600">Team Page</a></li>
              </ul>
            </div>

            {/* Category */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Category</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="" className="hover:text-blue-600">Data Analyst</a></li>
                <li><a href="" className="hover:text-blue-600">Data Scientist</a></li>
                <li><a href="" className="hover:text-blue-600">Data Engineer</a></li>
                <li><a href="" className="hover:text-blue-600">Data Administrator</a></li>
                <li><a href="" className="hover:text-blue-600">Machine Learning Engineer</a></li>
                <li><a href="" className="hover:text-blue-600">More</a></li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Follow Us</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-blue-600">Linked In</a></li>
                <li><a href="#" className="hover:text-blue-600">Facebook</a></li>
                <li><a href="#" className="hover:text-blue-600">Instagram</a></li>
                <li><a href="#" className="hover:text-blue-600">Dribbble</a></li>
                <li><a href="#" className="hover:text-blue-600">Behance</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Newsletter</h4>
              <p className="text-gray-600 text-sm mb-4">Sign up to recievit updates & office</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email or Email"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l outline-none focus:border-blue-600"
                />
                <button className="bg-[#2962FF] text-white px-4 py-2 rounded-r hover:bg-blue-700">
                  Send
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600 text-sm">
            Copyright © 2025 
           <span style={{color: '#0d6efd', fontWeight: 600}}>Dataxhire/Job. </span>
            All Rights Reserved
          </div>
        </div>
      </footer>
  )
}

export default Footer