import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center px-6 py-14 border-t border-gray-500/30 text-gray-500">
        <Image className="w-28 md:w-32 mb-4" src={assets.logo} alt="logo" />
        <p className="text-sm">Created by Ashish Raj</p>
      </div>
    </footer>
  );
};

export default Footer;
