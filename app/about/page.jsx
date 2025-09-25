"use client";

import React, { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaQuoteLeft,
  FaQuoteRight,
  FaTimes,
} from "react-icons/fa";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import BuildIcon from "@mui/icons-material/Build";
import SettingsIcon from "@mui/icons-material/Settings";
import FocusIcon from "@mui/icons-material/CenterFocusStrong";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import Slider from "react-slick";
import { motion, AnimatePresence, scale } from "framer-motion";
import CustomerCarosel from "../components/Home/CustomerCarosel";

// Timeline content array with icons
const items = [
  {
    title: "Mechanical Automation & ESD Equipment",
    cardDetailedText: `
      Mechanical automation, mechanical arm; Anti-static industrial equipment;
      Instruments such as surface resistance tester, wrist band/ground/equipment 
      online monitors, electrostatic tester; Purification engineering, etc.
    `,
    icon: <BuildIcon fontSize="medium" />,
  },
  {
    title: "Automatic Production Equipment",
    cardDetailedText: `
      Automatic vacuum dust-free packing machines, automatic production line,
      metal chassis, ESD workstation, dust-free workshop chest/shoe ark.
    `,
    icon: <SettingsIcon fontSize="medium" />,
  },
  {
    title: "Our Focus",
    cardDetailedText: `
      1. Leading of ESD industry
      2. High Quality / Reasonable Pricing
      3. After Sale Service
    `,
    icon: <FocusIcon fontSize="medium" />,
  },
  {
    title: "Cleanroom Consumables",
    cardDetailedText: `
      Anti-static dust-free clothing, air-laid paper, superfine fiber cloth,
      anti-static gloves, ESD shoes, wrist band, ankle band, chair, etc.
    `,
    icon: <CleaningServicesIcon fontSize="medium" />,
  },
];

const images = [
  "/about/a1.jpg", // Paragraph 1
  "/about/a2.jpg", // Paragraph 2
  "/about/e3.jpg", // Paragraph 3
];
const certificates = ["/certificate/c1.jpg", "/certificate/c2.jpg"];

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

const aboutParagraphs = [
  {
    title: "Company Overview",
    content: `NEUF DAWN SUPPLY CHAIN PRIVATE LIMITED, established in February 2020, is a dynamic company with a registered capital of 1.5 million INR and a dedicated team of 10 professionals. The company specializes in production, marketing, research, and development of a wide range of products including automatic equipment, mechanical arms, electrostatic equipment, testing instrumentation, hardware tools, cleanroom consumables, and other chemical products.`,
    image: images[0],
  },
  {
    title: "Product Standards & Departments",
    content: `All products adhere to enterprise standards and are certified by respected third-party organizations such as CE, UL, RoHS, and REACH. NEUF DAWN operates through nine specialized departments, including administration, R&D, production, and technical departments, ensuring smooth operations and continuous innovation.`,
    image: images[1],
  },
  {
    title: "Achievements & Commitment",
    content: `Recognized for its excellence, the company has been honored as a provincial high-tech private enterprise, acknowledged as a credit and contract enterprise, is a member of the Electrostatic Association, and is listed on the Shanghai Equity Exchange. Through its commitment to quality, innovation, and reliability, NEUF DAWN SUPPLY CHAIN PRIVATE LIMITED continues to lead in the ESD and automation industry, providing trusted solutions to clients worldwide.`,
    image: images[2],
  },
];

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const openModel = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModel = () => {
    setIsOpen(false);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1
    );
  };

  const modalVariant = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.8,
    },
  };

  const imageVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
  };

  return (
    <div className="mt-20 md:mt-40">
      {/* Hero Section */}
      <div className="h-[300px] md:h-[400px] flex flex-col justify-center items-center space-y-5 md:space-y-10 bg-gray-400/30">
        <h1 className="text-center text-3xl md:text-3xl lg:text-4xl logo">
          Neuf Dawn Supply Chain & Service Pvt Ltd.
        </h1>
        <p className="flex text-center text-xl md:text-3xl items-center">
          <FaQuoteLeft className="pb-5 mr-2" size={40} />
          Since 2020, delivering trusted supply chain and ESD solutions
          <FaQuoteRight className="pb-5 ml-2" size={40} />
        </p>
      </div>

      {/* Timeline Section */}
      <section className="py-10">
        <h2 className="text-3xl text-center font-bold mb-6">Business Scope</h2>
        <div className="mx-auto max-w-5xl">
          <Timeline position="alternate">
            {items.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  variant="body2"
                  color="text.secondary"
                >
                  {item.title}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  {index !== 0 && <TimelineConnector />}
                  <TimelineDot color="secondary">
                    {/* Animated icon */}
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.icon}
                    </motion.div>
                  </TimelineDot>
                  {index !== items.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    {item.title}
                  </Typography>
                  <Typography className="text-neutral-600">
                    {item.cardDetailedText}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            About NEUF DAWN SUPPLY CHAIN
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutParagraphs.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-700 flex-1">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Certificates
          </h2>
          <div className="hidden md:block lg:block">
            <Slider {...settings}>
              {certificates.map((cert, index) => (
                <div key={index} className="px-4">
                  <div
                    onClick={() => openModel(index)}
                    className="bg-white shadow-lg py-20 cursor-pointer rounded-lg overflow-hidden flex justify-center items-center h-[550px]"
                  >
                    <img
                      src={cert}
                      alt={`Certificate ${index + 1}`}
                      className="h-full w-full object-contain p-4"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="md:hidden lg:hidden overflow-hidden">
            <Slider {...settings} slidesToShow={1}>
              {certificates.map((cert, index) => (
                <div key={index} className="px-4">
                  <div
                    onClick={() => openModel(index)}
                    className="bg-white shadow-lg rounded-lg cursor-pointer overflow-hidden flex justify-center items-center h-64"
                  >
                    <img
                      src={cert}
                      alt={`Certificate ${index + 1}`}
                      className="h-full w-full object-contain p-4"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariant}
                className="fixed inset-0 bg-black/75  flex justify-center items-center z-50"
              >
                <button
                  className="absolute top-6 right-6 text-white text-3xl"
                  onClick={closeModel}
                >
                  <FaTimes />
                </button>
                <button
                  className="absolute left-6 text-white text-3xl"
                  onClick={prevImage}
                >
                  <FaArrowLeft />
                </button>
                <motion.img
                  key={currentIndex}
                  src={certificates[currentIndex]}
                  alt={`Certificate ${currentIndex + 1}`}
                  className="max-h-[80vh] max-w-[80vw] object-contain"
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                <button
                  className="absolute right-6 text-white text-3xl"
                  onClick={nextImage}
                >
                  <FaArrowRight />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>

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

           
            <div className="w-full h-96 md:h-full">
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
      </section> */}

      <section>
        <div>
          <CustomerCarosel />
        </div>
      </section>
    </div>
  );
};

export default page;
