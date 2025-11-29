// import React, {useState} from 'react'
// import { Search, MapPin, Briefcase, FileText, CheckCircle, Menu, X } from 'lucide-react';
// import { Link } from 'react-router';

// function Header() {

//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-sm fixed w-full z-100 ">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-end items-center h-20 ">
//             <div className="flex items-center mt-3 mb-3 fixed left-10 ">
//                 <img src="/logo.png" className="w-25 h-25 object-cover object-center" alt="" />
//             </div>
            
//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center space-x-8">
//               {/* <Link className="text-gray-700 hover:text-blue-600" to='/'>
//               HOME
//               </Link> */}
//               <Link to='/home' >
//               <button className="bg-[#2962FF] text-white px-4 py-2 hover:bg-blue-700">
//                 Home
//               </button>
//               </Link>
//               <Link className="text-gray-700 hover:text-blue-600" to='/'>
//               ABOUT US
//               </Link>
//               <Link className="text-gray-700 hover:text-blue-600" to='/contact'>
//               CONTACT US
//               </Link>
//               <Link className="text-gray-700 hover:text-blue-600" to='/'>
//               BLOG
//               </Link>
//               <Link to='/signup' >
//               <button className="bg-[#2962FF] text-white px-4 py-2  hover:bg-blue-700">
//                 Sign Up
//               </button>
//               </Link>
//               <Link to='/login' >
//               <button className="bg-[#2962FF] text-white px-4 py-2  hover:bg-blue-700">
//                 Login
//               </button>
//               </Link>
//               <button className="bg-[#2962FF] text-white px-4 py-2 rounded hover:bg-blue-700" to='/'>
//                 Post A Job
//               </button>
//             </div>

//             {/* Mobile menu button */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="text-gray-700 absolute right-5 top-5  "
//               >
//                 {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden bg-white border-t ">
//             <div className="px-4 pt-2 pb-3 space-y-1">
//               <Link className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded" t0='/aboutus' >
//               ABOUT US
//               </Link>
//               <Link className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded" to='/contact'>
//               CONTACT US
//               </Link>
//               <Link className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded" to='/blog'>
//               BLOG
//               </Link>
//               <Link to='/login' >
//               <button className="w-full bg-[#2962FF] text-white px-4 py-2 rounded hover:bg-blue-700 mt-2">
//                 Login
//               </button>
//               </Link>
//               <Link to='/signup' >
//               <button className="w-full bg-[#2962FF] text-white px-4 py-2 rounded hover:bg-blue-700 mt-2">
//                 Sign Up
//               </button>
//               </Link>
//               <Link>
//               <button className="w-full bg-[#2962FF] text-white px-4 py-2 rounded hover:bg-blue-700 mt-2">
//                 Post A Job
//               </button>
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>
//   )
// }

// export default Header

// import React, { useState, useEffect ,useRef} from 'react';
// import { Menu, X, Briefcase } from 'lucide-react';
// import { Link, useLocation } from 'react-router-dom'; // react-router-dom

// function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [jobDropdownOpen, setJobDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const location = useLocation();

//   // Close mobile menu whenever the route changes
//   useEffect(() => {
//     setMobileMenuOpen(false);
//   }, [location.pathname]);
//   useEffect(() => {
//     function onKey(e) {
//       if (e.key === 'Escape') setJobDropdownOpen(false);
//     }
//     function onClick(e) {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setJobDropdownOpen(false);
//       }
//     }
//     document.addEventListener('keydown', onKey);
//     document.addEventListener('mousedown', onClick);
//     return () => {
//       document.removeEventListener('keydown', onKey);
//       document.removeEventListener('mousedown', onClick);
//     };
//   }, []);


//   return (
//     <nav className="bg-white shadow-sm fixed w-full z-100 ">
//        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//            <div className="flex justify-end items-center h-20 ">
//              <div className="flex items-center mt-3 mb-3 fixed left-10 ">
//                  <img src="/logo.png" className="w-25 h-25 object-cover object-center" alt="" />
//              </div>
//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
              
//               <Link to='/home' >
//               <button className="bg-[#2962FF] text-white px-4 py-2 hover:bg-blue-700">
//                 Home
//               </button>
//               </Link>
//               <Link className="text-gray-700 hover:text-blue-600" to='/'>
//               ABOUT US
//              </Link>
//               <Link className="text-gray-700 hover:text-blue-600" to='/contact'>
//                CONTACT US
//               </Link>
//               <Link className="text-gray-700 hover:text-blue-600" to='/'>
//               BLOG
//               </Link>
//               <Link to='/signup' >
//               <button className="bg-[#2962FF] text-white px-4 py-2  hover:bg-blue-700">
//                 Sign Up
//               </button>
//               </Link>
//               <Link to='/login' >
//               <button className="bg-[#2962FF] text-white px-4 py-2  hover:bg-blue-700">
//                 Login
//               </button>
//               </Link>
//               {/* <button className="bg-[#2962FF] text-white px-4 py-2 rounded hover:bg-blue-700" to='/'>
//                 Post A Job
//                </button> */}
//                <div className="relative group">
//   <button
//     className="bg-[#2962FF] text-white px-4 py-2 rounded hover:bg-blue-700"
//   >
//     Post A Job
//   </button>

//   {/* Dropdown Box */}
  
//   <div
//   className="
//     absolute left-1/2 transform -translate-x-1/2
//     mt-3 w-64 bg-white shadow-lg rounded-lg border
//     opacity-0 invisible group-hover:opacity-100 group-hover:visible
//     transition-all duration-200 ease-out z-50
//   "
// >

//     <ul className="p-3 space-y-2 text-gray-700 text-sm">

//       <li>
//         <Link
//           to="/post-a-job/quick"
//           className="block px-3 py-2 rounded hover:bg-gray-100"
//         >
//           Quick Job Post
//         </Link>
//       </li>

//       <li>
//         <Link
//           to="/post-a-job/detailed"
//           className="block px-3 py-2 rounded hover:bg-gray-100"
//         >
//           Detailed Job Post
//         </Link>
//       </li>

//       <li>
//         <Link
//           to="/post-a-job/manage"
//           className="block px-3 py-2 rounded hover:bg-gray-100"
//         >
//           Manage Posted Jobs
//         </Link>
//       </li>

//       <li>
//         <Link
//           to="/pricing"
//           className="block px-3 py-2 rounded hover:bg-gray-100"
//         >
//           Pricing & Plans
//         </Link>
//       </li>

//     </ul>
//   </div>
// </div>

//            </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden absolute right-4 top-4">
//             <button
//               onClick={() => setMobileMenuOpen(prev => !prev)}
//               className="text-gray-700"
//               aria-label="Toggle mobile menu"
//             >
//               {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-white border-t">
//           <div className="px-4 pt-2 pb-4 space-y-2">
//             {/* Each Link closes the menu on click (via onClick) */}
//             <Link
//         className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded font-medium"
//         to="/home"
//         onClick={() => setMobileMenuOpen(false)}>
      
//         <button className="w-full bg-[#2962FF] text-white px-4 py-2 rounded hover:bg-blue-700 mt-2">HOME</button>
//       </Link>
//             <Link
//               className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
//               to="/aboutus"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               ABOUT US
//             </Link>

//             <Link
//               className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
//               to="/contact"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               CONTACT US
//             </Link>

//             <Link
//               className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
//               to="/blog"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               BLOG
//             </Link>

//             <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
//               <button className="w-full bg-[#2962FF] text-white px-4 py-2 rounded hover:bg-blue-700 mt-2">
//                 Login
//               </button>
//             </Link>

//             <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
//               <button className="w-full bg-[#2962FF] text-white px-4 py-2 rounded hover:bg-blue-700 mt-2">
//                 Sign Up
//               </button>
//             </Link>

//             <Link to="/post-a-job" onClick={() => setMobileMenuOpen(false)}>
//               <button className="w-full bg-[#2962FF] text-white px-4 py-2 rounded hover:bg-blue-700 mt-2">
//                 Post A Job
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Header;


// src/components/Header.jsx
// import React, { useState, useEffect, useRef } from "react";
// import { Menu, X } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [jobDropdownOpen, setJobDropdownOpen] = useState(false);      // desktop dropdown state
//   const [mobileJobSubOpen, setMobileJobSubOpen] = useState(false);    // MOBILE submenu state (must be declared)
//   const dropdownRef = useRef(null);
//   const location = useLocation();

//   // close menus when route changes
//   useEffect(() => {
//     setMobileMenuOpen(false);
//     setMobileJobSubOpen(false);
//     setJobDropdownOpen(false);
//   }, [location.pathname]);

//   // outside click / escape handler
//   useEffect(() => {
//     function onKey(e) {
//       if (e.key === "Escape") {
//         setJobDropdownOpen(false);
//         setMobileJobSubOpen(false);
//       }
//     }
//     function onDocClick(e) {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setJobDropdownOpen(false);
//       }
//     }
//     document.addEventListener("keydown", onKey);
//     document.addEventListener("mousedown", onDocClick);
//     return () => {
//       document.removeEventListener("keydown", onKey);
//       document.removeEventListener("mousedown", onDocClick);
//     };
//   }, []);

//   return (
//     <nav className="bg-white shadow-sm fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-end items-center h-20 relative">
//           <div className="flex items-center mt-3 mb-3 fixed left-10 ">
//                 <img src="/logo.png" className="w-25 h-25 object-cover object-center" alt="" />
//            </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-6 ml-auto">
//             <Link to="/home">
//               <button className="bg-[#2962FF] text-white px-4 py-2 hover:bg-blue-700 rounded">Home</button>
//             </Link>

//             <Link to="/aboutus" className="text-gray-700 hover:text-blue-600">ABOUT US</Link>
//             <Link to="/contact" className="text-gray-700 hover:text-blue-600">CONTACT US</Link>
//             <Link to="/blog" className="text-gray-700 hover:text-blue-600">BLOG</Link>

//             <Link to="/signup">
//               <button className="bg-[#2962FF] text-white px-4 py-2 hover:bg-blue-700 rounded">Sign Up</button>
//             </Link>

//             <Link to="/login">
//               <button className="bg-[#2962FF] text-white px-4 py-2 hover:bg-blue-700 rounded">Login</button>
//             </Link>

//             {/* Post A Job - desktop: hover + click toggle */}
//             <div
//               className="relative"
//               ref={dropdownRef}
//               onMouseEnter={() => setJobDropdownOpen(true)}
//               onMouseLeave={() => setJobDropdownOpen(false)}
//             >
//               <button
//                 onClick={() => setJobDropdownOpen((s) => !s)}
//                 aria-expanded={jobDropdownOpen}
//                 aria-haspopup="menu"
//                 className="bg-[#2962FF] text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
//               >
//                 Post A Job
//               </button>

//               <div
//                 className={
//                   "absolute left-1/2 transform -translate-x-1/2 mt-3 w-64 sm:w-80 bg-white shadow-lg rounded-lg border transition-all duration-150 ease-out z-50 " +
//                   (jobDropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none")
//                 }
//                 role="menu"
//                 aria-hidden={!jobDropdownOpen}
//               >
//                 <div className="p-3">
//                   <ul className="space-y-2 text-sm text-gray-700">
//                     <li><Link to="/post-a-job/quick" onClick={() => setJobDropdownOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50">Quick Job Post</Link></li>
//                     <li><Link to="/post-a-job/detailed" onClick={() => setJobDropdownOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50">Detailed Job Post</Link></li>
//                     <li><Link to="/post-a-job/manage" onClick={() => setJobDropdownOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50">Manage Posted Jobs</Link></li>
//                     <li><Link to="/pricing" onClick={() => setJobDropdownOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50">Pricing & Plans</Link></li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Mobile toggle button */}
//           <div className="md:hidden absolute right-4 top-4">
//             <button onClick={() => setMobileMenuOpen((v) => !v)} className="text-gray-700" aria-label="Toggle mobile menu">
//               {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-white border-t">
//           <div className="px-4 pt-2 pb-4 space-y-2">
//             <Link to="/home" onClick={() => setMobileMenuOpen(false)} className="block">
//               <button className="w-full bg-[#2962FF] text-white px-4 py-2 rounded hover:bg-blue-700 mt-2">HOME</button>
//             </Link>

//             <Link to="/aboutus" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">ABOUT US</Link>

//             <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">CONTACT US</Link>

//             <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">BLOG</Link>

//             <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="block">
//               <button className="w-full bg-[#2962FF] text-white px-4 py-2 rounded hover:bg-blue-700 mt-2">Login</button>
//             </Link>

//             <Link to="/signup" onClick={() => setMobileMenuOpen(false)} className="block">
//               <button className="w-full bg-[#2962FF] text-white px-4 py-2 rounded hover:bg-blue-700 mt-2">Sign Up</button>
//             </Link>

//             {/* Mobile Post A Job - expands submenu on tap */}
//             <div className="mt-2">
//               <button
//                 onClick={() => setMobileJobSubOpen((s) => !s)}
//                 className="w-full flex justify-between items-center px-4 py-2 bg-[#2962FF] text-white rounded hover:bg-blue-700"
//                 aria-expanded={mobileJobSubOpen}
//               >
//                 <span>Post A Job</span>
//                 <span className="ml-2">{mobileJobSubOpen ? "▾" : "▸"}</span>
//               </button>

//               {mobileJobSubOpen && (
//                 <div className="mt-2 bg-white border rounded shadow-sm">
//                   <Link to="/post-a-job/quick" onClick={() => { setMobileMenuOpen(false); setMobileJobSubOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Quick Job Post</Link>
//                   <Link to="/post-a-job/detailed" onClick={() => { setMobileMenuOpen(false); setMobileJobSubOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Detailed Job Post</Link>
//                   <Link to="/post-a-job/manage" onClick={() => { setMobileMenuOpen(false); setMobileJobSubOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Manage Posted Jobs</Link>
//                   <Link to="/pricing" onClick={() => { setMobileMenuOpen(false); setMobileJobSubOpen(false); }} className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Pricing & Plans</Link>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }


import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [jobDropdownOpen, setJobDropdownOpen] = useState(false);      // desktop dropdown state
  const [mobileJobSubOpen, setMobileJobSubOpen] = useState(false);    // MOBILE submenu state (must be declared)
  const dropdownRef = useRef(null);
  const location = useLocation();

  // close menus when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileJobSubOpen(false);
    setJobDropdownOpen(false);
  }, [location.pathname]);

  // outside click / escape handler
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setJobDropdownOpen(false);
        setMobileJobSubOpen(false);
      }
    }
    function onDocClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setJobDropdownOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDocClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDocClick);
    };
  }, []);

  return (
    <nav className=" fixed top-0 left-0 right-0 bg-white z-50 outline: none; border-bottom: 0; ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-12 relative">
          {/* Logo (moved to normal flow; reduced size) */}
          <div className="flex items-center mt-3 mb-3 fixed left-10 ">
                <img src="/logo.png" className="w-18 h-18 object-cover object-center" alt="" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 ml-auto">
            <Link to="/home">
              <button className="bg-[#2962FF] text-white px-3 py-1 hover:bg-blue-700 rounded text-xs md:text-sm">Home</button>
            </Link>

            <Link to="/aboutus" className="text-gray-700 hover:text-blue-600 text-xs md:text-sm">ABOUT US</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 text-xs md:text-sm">CONTACT US</Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 text-xs md:text-sm">BLOG</Link>

            <Link to="/signup">
              <button className="bg-[#2962FF] text-white px-3 py-1 hover:bg-blue-700 rounded text-xs md:text-sm">Sign Up</button>
            </Link>

            <Link to="/login">
              <button className="bg-[#2962FF] text-white px-3 py-1 hover:bg-blue-700 rounded text-xs md:text-sm">Login</button>
            </Link>

            {/* Post A Job - desktop: hover + click toggle */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setJobDropdownOpen(true)}
              onMouseLeave={() => setJobDropdownOpen(false)}
            >
              <button
                onClick={() => setJobDropdownOpen((s) => !s)}
                aria-expanded={jobDropdownOpen}
                aria-haspopup="menu"
                className="bg-[#2962FF] text-white px-3 py-1 rounded hover:bg-blue-700 focus:outline-none text-xs md:text-sm"
              >
                Post A Job
              </button>

              <div
                className={
                  "absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 sm:w-64 bg-white shadow-lg rounded-md border transition-all duration-150 ease-out z-50 " +
                  (jobDropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none")
                }
                role="menu"
                aria-hidden={!jobDropdownOpen}
              >
                <div className="p-2">
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li><Link to="/post-a-job/quick" onClick={() => setJobDropdownOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50">Quick Job Post</Link></li>
                    <li><Link to="/post-a-job/detailed" onClick={() => setJobDropdownOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50">Detailed Job Post</Link></li>
                    <li><Link to="/post-a-job/manage" onClick={() => setJobDropdownOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50">Manage Posted Jobs</Link></li>
                    <li><Link to="/pricing" onClick={() => setJobDropdownOpen(false)} className="block px-3 py-2 rounded hover:bg-gray-50">Pricing & Plans</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile toggle button */}
          <div className="md:hidden absolute right-3 top-3">
            <button onClick={() => setMobileMenuOpen((v) => !v)} className="text-gray-700 p-2" aria-label="Toggle mobile menu">
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-3 pt-2 pb-4 space-y-2">
            <Link to="/home" onClick={() => setMobileMenuOpen(false)} className="block">
              <button className="w-full bg-[#2962FF] text-white px-3 py-2 rounded hover:bg-blue-700 mt-1 text-sm">HOME</button>
            </Link>

            <Link to="/aboutus" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-sm">ABOUT US</Link>

            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-sm">CONTACT US</Link>

            <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded text-sm">BLOG</Link>

            <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="block">
              <button className="w-full bg-[#2962FF] text-white px-3 py-2 rounded hover:bg-blue-700 mt-1 text-sm">Login</button>
            </Link>

            <Link to="/signup" onClick={() => setMobileMenuOpen(false)} className="block">
              <button className="w-full bg-[#2962FF] text-white px-3 py-2 rounded hover:bg-blue-700 mt-1 text-sm">Sign Up</button>
            </Link>

            {/* Mobile Post A Job - expands submenu on tap */}
            <div className="mt-2">
              <button
                onClick={() => setMobileJobSubOpen((s) => !s)}
                className="w-full flex justify-between items-center px-3 py-2 bg-[#2962FF] text-white rounded hover:bg-blue-700 text-sm"
                aria-expanded={mobileJobSubOpen}
              >
                <span>Post A Job</span>
                <span className="ml-2">{mobileJobSubOpen ? "▾" : "▸"}</span>
              </button>

              {mobileJobSubOpen && (
                <div className="mt-2 bg-white border rounded shadow-sm">
                  <Link to="/post-a-job/quick" onClick={() => { setMobileMenuOpen(false); setMobileJobSubOpen(false); }} className="block px-3 py-2 text-gray-700 hover:bg-gray-50 text-sm">Quick Job Post</Link>
                  <Link to="/post-a-job/detailed" onClick={() => { setMobileMenuOpen(false); setMobileJobSubOpen(false); }} className="block px-3 py-2 text-gray-700 hover:bg-gray-50 text-sm">Detailed Job Post</Link>
                  <Link to="/post-a-job/manage" onClick={() => { setMobileMenuOpen(false); setMobileJobSubOpen(false); }} className="block px-3 py-2 text-gray-700 hover:bg-gray-50 text-sm">Manage Posted Jobs</Link>
                  <Link to="/pricing" onClick={() => { setMobileMenuOpen(false); setMobileJobSubOpen(false); }} className="block px-3 py-2 text-gray-700 hover:bg-gray-50 text-sm">Pricing & Plans</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
