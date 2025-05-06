import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl shadow-lg my-16">
      {/* Text Section */}
      <div className="flex flex-col items-start justify-center space-y-4 text-left md:max-w-md">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          Unleash Epic Gaming Moments
        </h2>
        <p className="text-base md:text-lg text-gray-700">
          Precision. Power. Performance. Everything you need to dominate the game.
        </p>
        <button className="group flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-full text-white font-medium shadow-md">
          Shop Now
          <Image
            className="group-hover:translate-x-1 transition-transform"
            src={assets.arrow_icon_white}
            alt="arrow_icon_white"
          />
        </button>
      </div>

      {/* Image Section */}
      <div className="flex flex-col items-center justify-center gap-6">
        <Image
          className="w-44 md:w-52"
          src={assets.jbl_soundbox_image}
          alt="jbl_soundbox_image"
        />
        <Image
          className="hidden md:block w-64"
          src={assets.md_controller_image}
          alt="md_controller_image"
        />
        <Image
          className="md:hidden w-48"
          src={assets.sm_controller_image}
          alt="sm_controller_image"
        />
      </div>
    </div>
  );
};

export default Banner;
