"use client";

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold">Bandage</a>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">About</a>

            {/* Dropdown */}
            <div className="relative">
              <button
                className="hover:text-gray-300 flex items-center"
                onClick={() => setIsOpen(!isOpen)}
              >
                Services
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06-.02L10 10.414l3.71-3.204a.75.75 0 111.02 1.1l-4 3.5a.75.75 0 01-.98 0l-4-3.5a.75.75 0 01-.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Web Development
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Graphic Design
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Digital Marketing
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
              Login
            </button>
            <button className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;