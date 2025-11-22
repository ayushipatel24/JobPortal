import React, { useState } from 'react';
import { Mail, Lock, User, Facebook, Youtube } from 'lucide-react';

export default function AuthPages() {
  const [currentPage, setCurrentPage] = useState('login'); // 'login' or 'signup'
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignupChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = () => {
    if (loginData.email && loginData.password) {
      console.log('Login:', loginData);
      alert('Login successful!');
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleSignup = () => {
    if (signupData.firstName && signupData.lastName && signupData.email && signupData.password) {
      console.log('Signup:', signupData);
      alert('Registration successful!');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

        <div className="py-8">
          {/* Hero Header */}
          <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white py-10 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 text-9xl font-bold flex items-center justify-center">
              <img src="/signup.jpg" className="w-full h-full object-cover object-center" alt="" />
            </div>
            <div className="relative max-w-4xl mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Login</h1>
              <p className="text-gray-300">Home / Login</p>
            </div>
          </div>

          {/* Login Form */}
          <div className="max-w-md mx-auto px-4">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">LOGIN</h2>
              <p className="text-gray-600 text-sm mb-6">
                If you have an account with us, please log in.
              </p>

              <div className="space-y-5">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    E-MAIL <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    PASSWORD <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Type Password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={handleLogin}
                    className="bg-[#2962FF] text-white px-8 py-3 rounded font-semibold hover:bg-blue-700 transition-colors"
                  >
                    LOGIN
                  </button>
                  <a href="#" className="text-blue-600 text-sm hover:underline flex items-center">
                    <Lock size={14} className="mr-1" />
                    Forgot Password?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      

    </div>
  );
}