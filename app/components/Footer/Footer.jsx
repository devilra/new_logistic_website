"use client";
import Link from "next/link";
import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
<IoCallOutline />;
import { CiGlobe } from "react-icons/ci";
<CiGlobe />;
import { IoHomeOutline } from "react-icons/io5";
<IoHomeOutline />;

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-none lg:flex  lg:justify-between lg:px-20  gap-8">
          {/* Logo + Social */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="pb-10">
              <Link href="/" className="text-xl flex items-center">
                <img
                  src="/logo2.png"
                  alt="logo"
                  // width={20}
                  // height={20}
                  className="h-15 w-15"
                />
                <h1 className="logo md:pt-2 text-black text-[14px]  ">
                  Neuf Dawn Supply Chain & Service <br />
                  Pvt Ltd.
                </h1>
              </Link>
              <div className="ml-5 flex flex-col">
                <a
                  href="#"
                  className="hover:text-gray-900 text-[14px]  font-bold"
                >
                  Selva D
                </a>
                <a
                  href="#"
                  className="hover:text-gray-900 text-[14px] font-bold"
                >
                  Sales Director
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-2xl text-gray-700">
              <FaLinkedin className="cursor-pointer hover:text-blue-600" />
              <FaFacebook className="cursor-pointer hover:text-blue-500" />
              <FaYoutube className="cursor-pointer hover:text-red-600" />
              <FaXTwitter className="cursor-pointer hover:text-black" />
              <FaInstagram className="cursor-pointer hover:text-pink-500" />
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-gray-600">
            <a
              href="#"
              className="hover:text-gray-900 flex items-center space-x-2"
            >
              <span className="bg-gray-900 text-white p-2 rounded-md">
                <IoCallOutline />
              </span>
              <span>+91 9381455455</span>
            </a>
            <a
              href="#"
              className="hover:text-gray-900 flex items-center space-x-2"
            >
              <span className="bg-gray-900 text-white p-2 rounded-md">
                <CiGlobe />
              </span>
              <span>sales@neufdawn.com</span>
            </a>
            <a
              href="#"
              className="hover:text-gray-900 flex items-center space-x-2"
            >
              <span className="bg-gray-900 text-white p-2 rounded-md">
                <IoHomeOutline />
              </span>
              <span>21, Vallakottai Murugan St, Kilkatalai, Ch-600117.</span>
            </a>
            {/* <a href="#" className="hover:text-gray-900">
              Cookie policy
            </a>
            <a href="#" className="hover:text-gray-900">
              Cookie preferences
            </a>
            <a href="#" className="hover:text-gray-900">
              Brand protection
            </a>
            <a href="#" className="hover:text-gray-900">
              Unsolicited Submissions Policy
            </a> */}
          </div>

          {/* Action Buttons */}
          {/* <div className="flex flex-col items-center md:items-end gap-3">
            <button className="px-5 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-50">
              Talk to an expert
            </button>
            <button className="px-5 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-50">
              Find local offices & information
            </button>
            <button className="px-5 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-50">
              Subscribe to our newsletter
            </button>
          </div> */}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} All rights reserved | Developed by{" "}
          <span className="font-semibold hover:text-blue-600 cursor-pointer">
            Amigiwebster
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
