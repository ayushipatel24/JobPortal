import React, {useState} from 'react'
import { Search, MapPin, Briefcase, FileText, CheckCircle, Menu, X } from 'lucide-react';
import { Link } from 'react-router';

function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-100 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16 ">
            <div className="flex items-center mt-2 fixed left-10 ">
                <img src="/logo.png" className="w-25 h-25 object-cover object-center" alt="" />
              {/* <span className="text-2xl font-bold text-blue-600">JobBoard</span>  */}
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link className="text-gray-700 hover:text-blue-600" to='/'>
              HOME
              </Link>
              <Link className="text-gray-700 hover:text-blue-600" to='/'>
              ABOUT US
              </Link>
              <Link className="text-gray-700 hover:text-blue-600" to='/contact'>
              CONTACT US
              </Link>
              <Link className="text-gray-700 hover:text-blue-600" to='/'>
              BLOG
              </Link>
              <Link to='/signup' >
              <button className="bg-[#2962FF] text-white px-4 py-2 rounded hover:bg-blue-700">
                Sign Up
              </button>
              </Link>
              <Link to='/login' >
              <button className="bg-[#2962FF] text-white px-4 py-2 rounded hover:bg-blue-700">
                Login
              </button>
              </Link>
              <button className="bg-[#2962FF] text-white px-4 py-2 rounded hover:bg-blue-700" to='/'>
                Post A Job
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 absolute right-5 top-5  "
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t ">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded" t0='/aboutus' >
              ABOUT US
              </Link>
              <Link className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded" to='/contact'>
              CONTACT US
              </Link>
              <Link className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded" to='/blog'>
              BLOG
              </Link>
              <Link to='/login' >
              <button className="w-full bg-[#2962FF] text-white px-4 py-2 rounded hover:bg-blue-700 mt-2">
                Login
              </button>
              </Link>
              <Link to='/signup' >
              <button className="w-full bg-[#2962FF] text-white px-4 py-2 rounded hover:bg-blue-700 mt-2">
                Sign Up
              </button>
              </Link>
              <Link>
              <button className="w-full bg-[#2962FF] text-white px-4 py-2 rounded hover:bg-blue-700 mt-2">
                Post A Job
              </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
  )
}

export default Header