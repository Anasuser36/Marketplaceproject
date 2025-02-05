"use client";

import React from "react";
import Link from "next/link";


import { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    
    <header className="bg-white-600 py-4">
       <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="text-black text-2xl font-bold">
          <Link href="/">Bandage</Link>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-black hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
               {/* Dropdown */}
            <div className="relative">
              <button
                className="hover:text-gray-300 flex items-center"
                onClick={() => setIsOpen(!isOpen)}
              >
                Shop
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
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg  z-50">
               
                  <a
                    href="/AllProducts"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Sale 2025
                  </a>
                  <a
                    href="/AllProducts"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                   All products
                  </a>
                </div>
              )}
            </div>

            </li>
            <li>
              <Link href="/services" className="text-black hover:text-gray-300">
                About
              </Link>
            </li>

            <li>
              <Link href="/Allblogs" className="text-black hover:text-gray-300">
                Blog
              </Link>
            </li>

            <li>
              <Link href="/services" className="text-black hover:text-gray-300">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-black hover:text-gray-300">
                Pages
              </Link>
            </li>
          </ul>
        </nav>

        {/* Icons and Buttons */}
        <div className="flex items-center space-x-6">

          {/* Register and Login Buttons */}
          <button className="bg-white text-blue-600 py-2 ">
           Login / Register
          </button>

          {/* Search Icon */}
          <img src="/images/searchicon.png"></img>

          {/* Wishlist Icon */}
         <img src="/images/carticon.png"></img>

          {/* Cart Icon */}
          <img src="/images/wishlisticon.png"></img>

          
        </div>
      </div>

      
     
    </header>

    
  );
};

export default Header;