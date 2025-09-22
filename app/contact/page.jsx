"use client";

import { helpItems } from "@/public/contact/contact";
import Image from "next/image";
import { useState } from "react";
import { CiMail } from "react-icons/ci";

export default function Contact() {
  const [country, setCountry] = useState("");

  return (
    <div>
      {/* section-1 */}

      <section className="px-4 md:px-6 md:mt-36  py-10">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl  text-center mb-4">Contact us</h1>
        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-10">
          Our dedicated team of logistics experts is here for you. Whether you
          have inquiries about cargo status or want to know more about our
          solutions, please don&apos;t hesitate to contact us, and we will be
          delighted to assist you.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sales */}
          <div className="rounded-lg border border-black/20 shadow-sm overflow-hidden">
            <Image
              src="/images/g7.jpg" // replace with your image
              alt="Sales"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg  mb-2">Sales</h2>
              <p className="text-gray-600 mb-4">
                We can help if you&apos;re an existing customer or interested in
                doing business with us
              </p>
              <div className="flex gap-2">
                <button className="bg-black text-white px-4 py-2 rounded-lg">
                  Sales enquiry
                </button>
                <button className="border px-4 py-2 rounded-lg">Prices</button>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="rounded-lg border border-black/20 shadow-sm overflow-hidden">
            <Image
              src="/images/g9.jpg" // replace with your image
              alt="Support"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg  mb-2">Support</h2>
              <p className="text-gray-600 mb-4">
                Support for existing or prospective customers, with ongoing or
                upcoming transactions
              </p>
              <div className="flex gap-2">
                <button className="bg-black text-white px-4 py-2 rounded-lg">
                  Support
                </button>
                <button className="border px-4 py-2 rounded-lg">
                  Case management
                </button>
              </div>
            </div>
          </div>

          {/* Local Office */}
          <div className="rounded-lg border border-black/20 shadow-sm overflow-hidden">
            <Image
              src="/contact/c3.webp"
              alt="office"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg  mb-2">Find your local office</h2>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Enter country/region name"
                className="w-full border px-3 py-2 rounded-lg mb-3"
              />
              <button className="bg-black text-white px-4 py-2 rounded-lg ">
                Find
              </button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="bg-blue-50 text-blue-700 mt-6 p-3 rounded-lg text-center text-sm">
          Case management is only available for logged-in users{" "}
          <a href="#" className="text-blue-600 underline">
            Register here
          </a>
        </div>
      </section>

      {/* section-2 */}

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl ">Need more help?</h2>
          <p className="text-gray-600 mt-2">
            Have a question about careers, press, or other topics? No problem,
            we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {helpItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={220}
                height={220}
                className=" mb-4"
              />
              <h3 className="text-xl  mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex gap-2">
                {Array.isArray(item.buttons)
                  ? item.buttons.map((btn, i) => (
                      <button
                        key={i}
                        className="border border-gray-400 px-4 py-2 rounded-lg text-sm hover:bg-gray-100"
                      >
                        {btn}
                      </button>
                    ))
                  : ""}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* section-3 */}

      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src="/contact/c11.svg"
            alt="Newsletter Illustration"
            className="w-80 md:w-full"
          />
        </div>

        {/* Right Side - Form */}
        <div>
          <h2 className="text-3xl  mb-4">
            Sign up to The Logistics Pulse newsletter
          </h2>
          <p className="text-gray-700 mb-6">
            Receive our insights directly in your mailbox by signing up through
            this form and enter a world of truly integrated logistics. Get
            inspired by our selection of articles that help you navigate supply
            chains, understand industry trends, and shape your logistics
            strategy. You can unsubscribe anytime.
          </p>

          {/* Email Input & Button */}
          <form className="mb-6">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <span className="px-3 text-gray-500">
                <CiMail size={18} />
              </span>
              <input
                type="email"
                placeholder="Enter an email"
                className="flex-1 p-3 outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
            >
              Submit
            </button>
          </form>

          {/* Disclaimer */}
          <p className="text-xs text-gray-600 mb-3">
            By submitting this form, I agree to receive logistics related news
            and marketing updates from A. P. Moller-Maersk and its{" "}
            <a href="#" className="text-blue-600 underline">
              affiliated companies
            </a>{" "}
            via e-mail and phone. I understand that I can opt out of such Maersk
            communications at any time by clicking the unsubscribe link.
          </p>
          <p className="text-xs text-gray-600">
            To see how we process your personal data, please see our{" "}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
