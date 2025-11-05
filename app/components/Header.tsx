"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "antd";
import Image from "next/image";
import logo from "../../public/assets/logo.webp";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#232536] border-gray-200 py-2.5 ">
      <div className="relative flex items-center justify-between px-4 mx-auto max-w-[1440px] py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
        <Image src={logo} alt="Logo" width={50} height={50} />
          <span className="text-white text-[20px] font-bold pl-2 ">
            blog Management
          </span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center lg:hidden">
          <button
            aria-controls="mobile-menu-2"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((o) => !o)}
            className="inline-flex items-center justify-center p-2 rounded-md text-white ring-1 ring-white/20 hover:bg-white/10 focus:outline-none"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path fillRule="evenodd" d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 111.414 1.414L13.414 10.586l4.361 4.361a1 1 0 01-1.414 1.414L12 12l-4.361 4.361a1 1 0 01-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>

        {/* Menu */}
        <div
          className={`${isOpen ? "block absolute right-4 top-full mt-2 bg-[#232536] border border-white/10 rounded-lg p-3 shadow-lg w-48" : "hidden"} lg:block lg:static lg:mt-0`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col items-start gap-2 mt-1 font-medium lg:mt-0 lg:flex-row lg:items-center lg:gap-0 lg:space-x-8 !mb-0">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="py-2 pl-3 pr-4 text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setIsOpen(false)} className="py-2 px-4 text-white">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/aboutus" onClick={() => setIsOpen(false)} className="py-2 px-4 text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contactus" onClick={() => setIsOpen(false)} className="py-2 px-4 text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Button
                href="/login"
                type="dashed"
                className="bg-purple-700 !py-5 !text-[18px] font-roboto !hover:bg-purple-800 w-full lg:w-auto"
              >
                Login
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
