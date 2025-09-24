"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const customers = [
  {
    id: 1,
    name: "Avary technology india private  limited",
    img: "/customers/c1.png",
  },
  { id: 2, name: "Customer 2", img: "/customers/c2.svg" },
  { id: 3, name: "Customer 3", img: "/customers/c3.png" },
  { id: 4, name: "Customer 4", img: "/customers/c4.png" },
  { id: 5, name: "Customer 5", img: "/customers/c5.png" },
  { id: 6, name: "Customer 6", img: "/customers/c6.webp" },
];

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
};

const CustomerCarosel = () => {
  return (
    <div className="bg-neutral-800 pt-20  md:pt-30 pb-20 md:pb-35 lg:pb-40  mb-10 ">
      <div className="max-w-6xl mx-auto px-6 md:overflow-hidden ">
        <h1 className="text-2xl md:text-3xl mb-3 text-white py-5">Customers</h1>
        <div className="hidden md:block  lg:block">
          <Slider {...settings}>
            {customers.map((customer) => (
              <div key={customer.id} className="flex flex-col items-center">
                <div className="">
                  <img
                    src={customer.img}
                    alt={customer.name}
                    className=" w-36 h-20 object-contain border rounded border-gray-400/30 px-5 mb-2"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="md:hidden  lg:hidden">
          <Slider
            dots={false}
            arrows={false}
            infinite={true}
            slidesToShow={2}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={2000}
            cssEase="linear"
            speed={2000}
          >
            {customers.map((customer) => (
              <div key={customer.id} className="flex flex-col items-center">
                <div className="">
                  <img
                    src={customer.img}
                    alt={customer.name}
                    className=" w-36 h-20 object-contain border rounded border-gray-400/30 px-5 mb-2"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CustomerCarosel;
