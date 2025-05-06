import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Experience Pure Sound - Your Perfect Headphones Awaits!",
      offer: "Limited Time Offer 30% Off",
      buttonText1: "Buy now",
      buttonText2: "Find more",
      imgSrc: assets.header_headphone_image,
    },
    {
      id: 2,
      title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
      offer: "Hurry up only few lefts!",
      buttonText1: "Shop Now",
      buttonText2: "Explore Deals",
      imgSrc: assets.header_playstation_image,
    },
    {
      id: 3,
      title: "Power Meets Elegance - Apple MacBook Pro is Here for you!",
      offer: "Exclusive Deal 40% Off",
      buttonText1: "Order Now",
      buttonText2: "Learn More",
      imgSrc: assets.header_macbook_image,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-r from-[#e6e9f2] to-[#f8fafc] py-10 md:px-16 px-6 mt-6 rounded-3xl min-w-full shadow-md"
          >
            <div className="md:pl-6 mt-10 md:mt-0 max-w-xl">
              <p className="text-orange-500 font-semibold text-sm md:text-base pb-1 tracking-wide">
                {slide.offer}
              </p>
              <h1 className="text-2xl md:text-4xl font-bold leading-snug text-gray-800">
                {slide.title}
              </h1>
              <div className="flex items-center gap-4 mt-5">
                <button className="px-7 py-2 md:px-10 md:py-3 bg-orange-600 hover:bg-orange-700 transition text-white rounded-full font-semibold shadow-md">
                  {slide.buttonText1}
                </button>
                <button className="group flex items-center gap-2 text-orange-600 hover:underline font-medium">
                  {slide.buttonText2}
                  <Image
                    className="group-hover:translate-x-1 transition-transform"
                    src={assets.arrow_icon}
                    alt="arrow_icon"
                  />
                </button>
              </div>
            </div>
            <div className="flex items-center flex-1 justify-center">
              <div className="overflow-hidden rounded-xl hover:scale-105 transition-transform duration-300">
                <Image
                  className="md:w-72 w-48 object-contain"
                  src={slide.imgSrc}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-3 mt-8">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-3 w-3 rounded-full transition-all cursor-pointer ${
              currentSlide === index
                ? "bg-orange-600 scale-110 shadow-md"
                : "bg-gray-400/40"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;
