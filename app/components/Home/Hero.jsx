"use client";

import { insights, insights_2 } from "@/app/constants/HeroPage";
import Image from "next/image";
import React, { useState } from "react";

const Hero = () => {
  const [selectedTab, setSelectedTab] = useState("insights");

  return (
    <div className="min-h-screen">
      {/* Hero video section */}
      <section className="relative w-full h-[550px] md:h-[400px]  md:rounded-br-[70px] overflow-hidden">
        {/* <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/4320049/4320049-hd_1920_1080_30fps.mp4"
          autoPlay
          loop
          muted
          playsInline
        /> */}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover object-top"
          // src="/videos/bg-2.mp4"
          src="/banner.jpg"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="z-10 relative flex flex-col h-full items-center pt-10 justify-center md:h-[80%] px-6 text-white">
          {/* <h1 className="text-4xl md:text-5xl font-light leading-tight">
            Resilience insights
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-md">
            In recent years, the world we live in has seen disruptions,
            unexpected events and crises that showed just how interconnected and
            fragile international supply chains are.
          </p>
          <h1 className="py-5">
            How can one be resilient enough? How can business stay strong?
          </h1>
          <div className="mt-6 flex flex-wrap md:flex-row gap-4 justify-center">
            <button className="px-2 py-2 bg-transparent w-full md:w-[220px] border border-white rounded-lg hover:bg-white/10 hover:text-white transition">
              View logistics insights
            </button>
            <button className="px-2 py-2 bg-transparent w-full md:w-[220px] border border-white rounded-lg hover:bg-white/10 transition">
              Find out how we can help
            </button>
          </div> */}
          <div className="md:bg-gray-300/5 lg:bg-gray-300/5">
            <h1 className="md:text-4xl lg:text-5xl px-1 md:px-10 lg:px-15 md:py-5 lg:py-7 text-neutral-300/50 text-4xl">
              Neuf Dawn Supply Chain & Service Pvt Ltd
            </h1>
          </div>
          <div className="">
            <h1 className="pt-5 text-xl text-neutral-300/70">We focus on : </h1>
            <ul className="list-decimal space-y-1 pl-10 pt-2 tracking-[1px] text-neutral-300/80 text-[12px]">
              <li>Leading of ESD industry</li>
              <li>High Quality/ Reasonable Pricing</li>
              <li>After Sale Service</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sticky Tabs */}
      <section className="">
        {/* The sticky heading container. Use position: sticky so it becomes fixed when it reaches the top of the viewport. top should equal navbar height (4rem). */}
        <div className="mt-6">
          <div className="sticky top-12 md:top-36 z-20 px-4 md:px-8 bg-white">
            {/* Add a little inner wrapper with border and background to match the site look */}
            <div className="py-4 md:py-4 bg-white  border-gray-200">
              {/* Mobile: Dropdown */}
              <div className="md:hidden">
                <select
                  value={selectedTab}
                  onChange={(e) => setSelectedTab(e.target.value)}
                  className="w-full outline-none rounded-md px-3 py-2"
                >
                  <option value="insights">ESD Products</option>
                  {/* <option value="help">How we help</option> */}
                </select>
              </div>
              <div className="hidden md:flex space-x-8 relative border-b-1 border-gray-300">
                <button
                  onClick={() => setSelectedTab("insights")}
                  className={`relative py-3 text-[16px] ${
                    selectedTab === "insights"
                      ? "text-black after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-black"
                      : ""
                  }`}
                >
                  ESD Products
                </button>
                {/* <button
                  onClick={() => setSelectedTab("help")}
                  className={`relative py-2 text-[16px] ${
                    selectedTab === "help"
                      ? "  after:absolute after:bottom-0  after:left-0 after:h-[3px] after:w-full after:bg-black"
                      : ""
                  }`}
                >
                  How we help
                </button> */}
              </div>

              {/* <div className="pb-4 space-x-5">
                <button className="text-[16px] ">Logistics insights</button>
                <button className="text-[16px]">How we help</button>
              </div> */}
              <div className="mt-1 md:hidden h-0.5 w-full bg-transparent">
                <div className="w-full max-w-full h-0.5 bg-gray-900/10" />
              </div>
            </div>
          </div>

          {/* Content below the sticky heading - scrolls under the heading */}
          <div className="pt-6 pb-24 px-4 md:px-8">
            <h4 className="text-xl font-semibold">Why ESD Matters</h4>
            <p className="text-gray-600 mt-2 max-w-2xl">
              ESD products are designed to protect sensitive electronic
              components from static electricity damage.In industries like
              electronics manufacturing, automation, and supply chain, these
              products ensure safe handling and high reliability.
            </p>
            <section className="px-1 py-12">
              <div className="grid md:grid-cols-4 auto-rows-[200px] gap-6">
                {insights.map((item) => (
                  <div
                    key={item.id}
                    className={`group relative rounded-xl overflow-hidden shadow-md ${item.className}`}
                  >
                    {/* Image */}
                    <img
                      src={item.img}
                      alt={item.title}
                      className="object-cover transition-transform w-full duration-500 group-hover:scale-110"
                    />

                    {/* Black Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 " />

                    {/* Text Content */}
                    <div className="absolute bottom-0 left-0 p-4  text-white transition-all duration-500 group-hover:-translate-y-2">
                      <p className="text-xs font-semibold text-white">
                        {item.tag} • {item.date}
                      </p>
                      <h3 className="text-sm md:text-base font-bold">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="text-center mt-6">
                <button className="px-6 py-2 border rounded-full text-sm font-medium hover:bg-gray-100">
                  View All
                </button>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl md:text-4xl  mb-4 ">
                  Application Field
                </h2>
                <p className="text-gray-700 mb-4">
                  ESD products are widely used in electronics manufacturing,
                  semiconductor plants, automotive, aerospace, and medical
                  device industries. These fields handle highly sensitive
                  components where static discharge can cause major damage.
                </p>
              </div>

              <div className="pt-16 ">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div className="flex md:hidden justify-center">
                    <img
                      src="/home/h7.webp"
                      alt="Supply chain resilience"
                      className="rounded-xl shadow-lg w-full h-auto"
                    />
                  </div>

                  <div className="md:pt-5">
                    <h2 className="text-2xl md:text-4xl  mb-4 ">
                      Structure of ESD Products
                    </h2>
                    <p className="text-gray-700 mb-6 order-4">
                      Most ESD products are designed with conductive,
                      dissipative, and shielding materials. Their layered
                      structure helps safely neutralize static charges, ensuring
                      smooth functioning of delicate devices.
                    </p>
                    <h2 className="text-2xl md:text-4xl  mb-4 ">
                      Why It Matters
                    </h2>
                    <p className="text-gray-700 mb-6 order-4">
                      By implementing ESD-safe workstations, flooring, and
                      accessories, companies reduce product failures, improve
                      reliability, and maintain international quality standards.
                      This creates a safer and more efficient working
                      environment.
                    </p>
                    {/* <button className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-3 rounded-md transition duration-200">
                      Access the reports
                    </button> */}
                  </div>

                  {/* Right Image */}
                  <div className="md:flex hidden justify-center">
                    <img
                      src="/home/e12.jpg"
                      alt="Supply chain resilience"
                      className="rounded-xl shadow-lg w-full h-[340px]"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* section Discover */}
          <section className="pt-5 pb-20 bg-gray-50">
            <div className="max-w-9xl mx-auto px-6 text-center">
              <h2 className="text-2xl md:text-4xl font-[300] text-left py-10 mb-12">
                Where ESD Products Are Used
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {insights_2.map((item, idx) => (
                  <div
                    key={idx}
                    className="h-full shadow-md hover:shadow-xl transition rounded-2xl p-6 flex flex-col items-center gap-4 hover:-translate-y-1 duration-300"
                  >
                    {item.icon}
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                    <div className="flex gap-3 mt-4">
                      <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 text-sm">
                        Learn more
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 text-sm">
                        How we help
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <div className="py-16 px-6 ">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="">
                <img
                  src="/home/e13.jpg"
                  alt="UREC ESD Gloves"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              <div className="md:pt-5">
                <h2 className="text-2xl md:text-4xl  mb-4 ">
                  UREC ESD Gloves & Wristband
                </h2>
                <p className="text-gray-700 mb-4">
                  Protect sensitive electronics and components from damaging
                  static discharge. Our anti-static gloves and wrist strap set
                  ensure safe handling in labs and assembly lines. Reliable,
                  comfortable, and compliant — keeping your devices safe every
                  step of the way.
                </p>

                <button className="bg-neutral-950 hover:bg-neutral-700 text-[15px] text-white font-medium px-6 md:px-4 py-2 rounded-md transition duration-200">
                  Explore →
                </button>
              </div>
            </div>
          </div>
          <div className="py-20">
            <div
              className="relative bg-cover bg-center h-[270px] md:h-[520px]  flex items-center  md:items-center justify-center md:justify-start text-center md:text-left"
              style={{
                backgroundImage: "url('/home/e14.png')",
              }}
            >
              <div className="absolute inset-0 bg-black/65 rounded-xl"></div>
              <div className="relative z-10 max-w-4xl px-4 text-start md:px-8 py-6 md:pt-16">
                <h2 className="text-2xl  md:text-4xl  text-white leading-snug mb-4">
                  Protect semiconductor components from static while ensuring
                  precision and safety in every production step
                </h2>
                <button className="bg-white sm:w-auto hover:bg-white/80  font-medium px-5 py-2 rounded-md transition duration-200">
                  How we help
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* form Section */}

        <section className="max-w-6xl mx-auto px-6 pb-28">
          <h2 className="text-2xl md:text-3xl mb-3">
            Sign up to The Logistics Pulse newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Receive our Insights directly in your mailbox by signing up through
            this form and enter a world of truly Integrated logistics. Get
            inspired by our selection of articles that help you navigate supply
            chains, understand industry trends, and shape your logistics
            strategy. You can unsubscribe anytime.
          </p>

          {/* Form */}
          <form className="space-y-6">
            {/* First + Last name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter a first name"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter a last name"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
            </div>

            {/* Email + Job Role */}
            <div className="grid grid-cols-1 md:w-1/2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter an email"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Job Role
                </label>
                <select className="border border-gray-300 rounded-md px-3 py-2 w-full">
                  <option>Select your Job role</option>
                  <option>Manager</option>
                  <option>Logistics Specialist</option>
                  <option>Supply Chain Analyst</option>
                </select>
              </div>
            </div>

            {/* Company + Country */}
            <div className="grid grid-cols-1 md:w-1/2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Enter a company name"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Country/Region
                </label>
                <select className="border border-gray-300 rounded-md px-3 py-2 w-full">
                  <option>Select country/region</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-start  md:w-[1000px] space-x-2">
              <input type="checkbox" className="mt-1" />
              <p className="text-sm text-gray-600">
                I agree to receive logistics related news and marketing updates
                by email, phone, messaging services (e.g. WhatsApp) and other
                digital platforms, including but not limited to social media
                (e.g., LinkedIn) and its affiliated companies (see latest{" "}
                <a href="#" className="text-blue-600 underline">
                  company overview
                </a>
                ). I understand that I at any time by clicking the unsubscribe
                link. To see how we use your personal data, please read our{" "}
                <a href="#" className="text-blue-600 underline">
                  Privacy Notification
                </a>
                .
              </p>
            </div>

            {/* Extra note */}
            <p className="text-sm text-gray-600">
              Please tick the box above then click <strong>Submit</strong>.
            </p>

            <p className="text-sm text-gray-600">
              By completing this form, you confirm that you agree to the use of
              your personal data by Maersk as described in our{" "}
              <a href="#" className="text-blue-600 underline">
                Privacy Notification
              </a>
              .
            </p>

            {/* Submit */}
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>
        </section>
      </section>
    </div>
  );
};

export default Hero;
