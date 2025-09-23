"use client";

import Link from "next/link";
import { navlink_1, navLink_2 } from "../constants/navbarLink";
import { MdOutlineContactSupport, MdOutlineSearch } from "react-icons/md";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { RiContactsLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { GrContact } from "react-icons/gr";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white  z-50">
      <div className="max-w-7xl mx-auto flex justify-end md:justify-between items-center px-6 py-3">
        <div className="flex md:justify-end   items-center  md:items-center gap-2">
          {/* Mobile Menu */}

          <div className="">
            {/* <Link href="/" className="text-xl md:flex  md:items-center">
              <img
                src="/logo2.png"
                alt="logo"
                // width={20}
                // height={20}
                className="h-20 w-20"
              />
              <h1 className="logo md:pt-2 hidden md:block text-black font-bold ">
                Neuf Dawn Supply Chain & Service <br />
                Pvt Ltd.
              </h1>
            </Link> */}
            <Link href="/" className="flex items-center gap-2 flex-1">
              <img
                src="/logo2.png"
                alt="logo"
                className="h-12 w-12 sm:h-14 sm:w-14 md:h-20 md:w-20"
              />
              <h1 className="text-sm sm:text-base md:text-lg font-bold text-black leading-tight whitespace-normal break-words">
                Neuf Dawn Supply Chain & Service <br />
                Pvt Ltd.
              </h1>
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <MdOutlineSearch size={25} className="text-gray-700" />
            <MdOutlineContactSupport size={23} className="text-gray-700" />
            <GrContact size={20} className="text-gray-700" />
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <RxCross2 size={25} />
              ) : (
                <HiMiniBars3BottomRight size={25} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile open navbar */}

        <AnimatePresence>
          {open && (
            <>
              {/* Background Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black z-40"
                onClick={() => setOpen(false)}
              />

              {/* Sliding Menu */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.4 }}
                className="fixed top-0 right-0 h-full w-full bg-white shadow-lg z-50"
              >
                <div className="flex justify-end p-4">
                  <button onClick={() => setOpen(false)}>
                    <RxCross2 size={25} className="text-gray-700" />
                  </button>
                </div>

                <ul className="flex flex-col gap-4 font-medium text-gray-700 px-6">
                  <li>
                    <Link href="#">Prices</Link>
                  </li>
                  <li>
                    <Link href="#">Book</Link>
                  </li>
                  <li>
                    <Link href="#">Schedules</Link>
                  </li>
                  <li>
                    <Link href="#">Tracking</Link>
                  </li>
                  <li>
                    <Link href="#">Manage</Link>
                  </li>
                  <li>
                    <Link href="#">Services</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact us</Link>
                  </li>
                </ul>

                <div className="mt-6 px-6 flex gap-3">
                  <button className="w-1/2 px-4 py-2 border rounded">
                    Register
                  </button>
                  <button className="w-1/2 px-4 py-2 bg-sky-500 text-white rounded">
                    Login
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Desktop navlink_1 */}

        <div className="hidden md:block">
          <ul className="flex gap-5">
            {navlink_1.map((l, index) => (
              <div key={index}>
                <Link
                  href={l.path}
                  className="flex items-center p-2 hover:bg-gray-200 transition-all duration-300 gap-1 rounded text-[16px]"
                >
                  {l.icon}
                  <li>{l.title}</li>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop_Navlink_2 */}

      <div className="px-6 hidden md:flex md:justify-between md:items-center py-2">
        <ul className="flex gap-5">
          {navLink_2.map((l, index) => (
            <div key={index}>
              <Link
                href="#"
                className="flex p-2 hover:bg-gray-200 transition-all duration-300 items-center rounded"
              >
                {l.title}
                <li>{l.icon}</li>
              </Link>
            </div>
          ))}
        </ul>
        <div className="flex gap-2">
          <Link
            href="#"
            className="flex items-center gap-2 border p-2 rounded hover:bg-gray-200 transition-all duration-300 border-gray-200"
          >
            <RiContactsLine />
            <span>Register</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 border p-2 rounded hover:bg-gray-200 transition-all duration-300 border-gray-200"
          >
            <RiContactsLine />
            <span>Login</span>
          </Link>
        </div>
      </div>

      <div className="border-b border-gray-200"></div>
    </nav>
  );
};

export default Navbar;
