"use client";

import { helpItems } from "@/app/constants/contact";
import Image from "next/image";
import { useMemo, useState } from "react";
import { CiMail } from "react-icons/ci";
import countryList from "react-select-country-list";
import axios from "axios";
import { toast } from "react-toastify";
import API from "../api";

export default function Contact() {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    postcode: "",
    enquiry: "",
  });

  const countries = useMemo(() => countryList().getData(), []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await API.post("/contact", formData);

      //console.log(res);

      if (res.data.success) {
        toast.success("✅ Your message has been sent!");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          country: "",
          postcode: "",
          enquiry: "",
        });
      } else {
        toast.error("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("⚠️ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* section-1 */}

      <section className="px-4 md:px-6 md:mt-36  py-10">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl  text-center mb-4">Contact us</h1>
        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-10">
          We’d love to hear from you! Whether you have questions, feedback, or
          partnership inquiries, our team is here to assist you. Reach out today
          and we’ll get back to you as soon as possible.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sales */}
          <div className="rounded-lg border border-black/20 shadow-sm overflow-hidden">
            <Image
              src="/contact/c1.jpg"
              alt="Sales"
              width={500}
              height={300}
              className="w-full h-48 object-contain"
            />
            <div className="p-4">
              <h2 className="text-lg  mb-2">Sales</h2>
              <p className="text-gray-600 mb-4">
                Explore our wide range of products including Networking
                Ionizers, Ionizing Air Bars, Ionizing Air Guns/Nozzles, Ionizing
                Snakes/Nets, and precision Instruments and Testers. We provide
                reliable solutions to meet all your ionization and testing
                needs.
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
              src="/contact/c2.jpg" // replace with your image
              alt="Support"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg  mb-2">Support</h2>
              <p className="text-gray-600 mb-4">
                Our Next Support team is always ready to assist you with product
                selection, technical guidance, and after-sales support. Reach
                out anytime to get expert help and ensure smooth operation of
                your ionization solutions
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
              src="/contact/c3.jpg"
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

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl   md:text-5xl text-center mb-12">
            Contact Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Head Office</h3>
                <p>
                  21, Vallakottai Murugan Street, Kilkatalai, Chennai - 600117
                </p>
                <p>Contact No: +91 93814 55455 / +91 90031 28241</p>
                <p>
                  Email:{" "}
                  <a href="mailto:sales@neufdawn.com" className="text-blue-600">
                    sales@neufdawn.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Office Address</h3>
                <p>
                  Shop No.3, Maple Shop Building, Ground Floor, Thriveni Nagar,
                  Vadakkupattu, Kundrathur TK, Kanchipuram Dist., Tamilnadu -
                  603204
                </p>
              </div>
            </div>

            <div className="w-full h-96 md:h-[400px] ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.348372749267!2d80.0349015!3d13.034158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266633f973a91%3A0x7dca5b362f735e50!2sVallakottai%20Murugan%20St%2C%20Chennai%2C%20Tamil%20Nadu%20600117!5e0!3m2!1sen!2sin!4v1695700000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="border-0 rounded-lg"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full  bg-gray-100/10 py-10">
        <div>
          <h1 className="text-3xl md:text-5xl  text-center my-5">
            Get In Touch
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-6xl bg-white/50 grid grid-cols md:grid-cols-2  gap-5  rounded-lg p-6 space-y-5"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium mb-1">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Select Country</option>
              {countries.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          {/* Postcode */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Postcode <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="postcode"
              required
              value={formData.postcode}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Enquiry */}
          <div>
            <label className="block text-sm font-medium mb-1">Enquiry</label>
            <textarea
              name="enquiry"
              rows="4"
              value={formData.enquiry}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`w-full  ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
              } text-white py-2 px-4 rounded-md transition `}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
