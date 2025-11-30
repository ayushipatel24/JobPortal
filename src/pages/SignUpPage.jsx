// import React, { useState } from 'react';
// import { Mail, Lock, User, Facebook, Youtube } from 'lucide-react';

// export default function AuthPages() {
//   const [currentPage, setCurrentPage] = useState('login'); // 'login' or 'signup'
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: ''
//   });
//   const [signupData, setSignupData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: ''
//   });

//   const handleLoginChange = (e) => {
//     setLoginData({
//       ...loginData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSignupChange = (e) => {
//     setSignupData({
//       ...signupData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleLogin = () => {
//     if (loginData.email && loginData.password) {
//       console.log('Login:', loginData);
//       alert('Login successful!');
//     } else {
//       alert('Please fill in all fields');
//     }
//   };

//   const handleSignup = () => {
//     if (signupData.firstName && signupData.lastName && signupData.email && signupData.password) {
//       console.log('Signup:', signupData);
//       alert('Registration successful!');
//     } else {
//       alert('Please fill in all fields');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white-50">

//       {/* Sign Up Page */}
//         <div className=" ">
//           {/* Hero Header */}
          
//           <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white py-16 relative overflow-hidden h-[200px] flex items-center justify-center mb-10">
//         {/* Background image (absolute, low-opacity) */}
//         <div className="absolute inset-0">
//           <img
//             src="/signup.jpg"
//             className="w-full h-full object-cover object-center opacity-10"
//             alt="background"
//           />
//         </div>

//         {/* Centered content */}
//         <div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center px-4 text-center">
//           <h1 className="text-4xl md:text-4xl font-bold mb-2">Register</h1>
//           <p className="text-gray-300">Home / Register </p>
//         </div>
//       </div>

//           {/* Sign Up Form */}
//           <div className="max-w-2xl mx-auto px-4">
//             <div className="bg-white rounded-lg shadow-xl p-8">
//               <h2 className="text-xl font-bold text-gray-900 mb-2">PERSONAL INFORMATION</h2>
//               <p className="text-gray-600 text-sm mb-6">
//                 If you have an account with us, please log in.
//               </p>

//               <div className="space-y-5">
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2">
//                     First Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     placeholder="First Name"
//                     value={signupData.firstName}
//                     onChange={handleSignupChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2">
//                     Last Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     placeholder="Last Name"
//                     value={signupData.lastName}
//                     onChange={handleSignupChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2">
//                     E-MAIL <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Your Email Address"
//                     value={signupData.email}
//                     onChange={handleSignupChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2">
//                     Password <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     placeholder="Type Password"
//                     value={signupData.password}
//                     onChange={handleSignupChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
//                   />
//                 </div>

//                 <div className="flex items-center justify-between pt-2">
//                   <button
//                     onClick={handleSignup}
//                     className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded font-semibold hover:bg-blue-600 hover:text-white transition-colors"
//                   >
//                     CREATE
//                   </button>
//                   {/* <div className="flex space-x-2">
//                     <button className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-colors">
//                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                       </svg>
//                     </button>
//                     <button className="bg-red-600 text-white p-3 rounded hover:bg-red-700 transition-colors">
//                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
//                       </svg>
//                     </button>
//                   </div> */}

//                   <div className="flex space-x-2">

//   {/* LinkedIn Button */}
//   <button
//     className="bg-[#0A66C2] text-white w-10 h-10 flex items-center justify-center rounded hover:bg-[#004182] transition-colors"
//   >
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       height="20"
//       width="20"
//       viewBox="0 0 448 512"
//       fill="currentColor"
//     >
//       <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341C24 107 0 83 0 53.3A53.3 53.3 0 0153.3 0c29.7 0 53.7 24 53.7 53.3 0 29.7-24 53.7-53.7 53.7zM447.9 448h-92.6V302.4c0-34.7-.7-79.2-48.29-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.7V148.9h89v40.8h1.3c12.4-23.5 42.7-48.3 87.8-48.3 93.9 0 111.2 61.8 111.2 142.3V448z"/>
//     </svg>
//   </button>

//   {/* Google Button */}
//   <button
//     className="bg-[#DB4437] text-white w-10 h-10 flex items-center justify-center rounded hover:bg-[#B33428] transition-colors"
//   >
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       height="20"
//       width="20"
//       viewBox="0 0 488 512"
//       fill="currentColor"
//     >
//       <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123.1 24.5 166.3 64.9l-67.4 64.9C310.6 106 282.6 96 248 96c-87 0-158 70.6-158 160s71 160 158 160c100.7 0 138.3-72.1 144.1-109H248v-87.9h240C486.9 237.6 488 249.3 488 261.8z"/>
//     </svg>
//   </button>

// </div>

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//     </div>
//   );
// }

import React, { useState } from 'react';
import { Mail, Lock, User, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';


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
    <div className="min-h-screen bg-white-50 mt-px">

      {/* Hero Header */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white py-12 relative overflow-hidden h-[180px] flex items-center justify-center mb-8">
        {/* Background image (absolute, low-opacity) */}
        <div className="absolute inset-0">
          <img
            src="/signup.jpg"
            className="w-full h-full object-cover object-center opacity-8"
            alt="background"
          />
        </div>

        {/* Centered content */}
        <div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center px-4 text-center">
  <h1 className="text-2xl md:text-3xl font-semibold mb-0">Register</h1>

  <p className="text-white text-sm">
    <Link to="/home" className="hover:underline text-white">Home</Link> / Register
  </p>
</div>

      </div>

      {/* Sign Up Form */}
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">PERSONAL INFORMATION</h2>
          <p className="text-gray-600 text-sm mb-5">
            If you have an account with us, please log in.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={signupData.firstName}
                onChange={handleSignupChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={signupData.lastName}
                onChange={handleSignupChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm">
                E-MAIL <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={signupData.email}
                onChange={handleSignupChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Type Password"
                value={signupData.password}
                onChange={handleSignupChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handleSignup}
                className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-2 rounded font-semibold hover:bg-blue-600 hover:text-white transition-colors text-sm"
              >
                CREATE
              </button>

              <div className="flex space-x-2">
                {/* LinkedIn Button */}
                <button
                  className="bg-[#0A66C2] text-white w-9 h-9 flex items-center justify-center rounded hover:bg-[#004182] transition-colors"
                  aria-label="Sign in with LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="16"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341C24 107 0 83 0 53.3A53.3 53.3 0 0153.3 0c29.7 0 53.7 24 53.7 53.3 0 29.7-24 53.7-53.7 53.7zM447.9 448h-92.6V302.4c0-34.7-.7-79.2-48.29-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.7V148.9h89v40.8h1.3c12.4-23.5 42.7-48.3 87.8-48.3 93.9 0 111.2 61.8 111.2 142.3V448z"/>
                  </svg>
                </button>

                {/* Google Button */}
                <button
                  className="bg-[#DB4437] text-white w-9 h-9 flex items-center justify-center rounded hover:bg-[#B33428] transition-colors"
                  aria-label="Sign in with Google"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="16"
                    viewBox="0 0 488 512"
                    fill="currentColor"
                  >
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123.1 24.5 166.3 64.9l-67.4 64.9C310.6 106 282.6 96 248 96c-87 0-158 70.6-158 160s71 160 158 160c100.7 0 138.3-72.1 144.1-109H248v-87.9h240C486.9 237.6 488 249.3 488 261.8z"/>
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
