import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: assets.girl_with_headphone_image,
    title: "Unparalleled Sound",
    description: "Experience crystal-clear audio with premium headphones.",
  },
  {
    id: 2,
    image: assets.girl_with_earphone_image,
    title: "Stay Connected",
    description: "Compact and stylish earphones for every occasion.",
  },
  {
    id: 3,
    image: assets.boy_with_laptop_image,
    title: "Power in Every Pixel",
    description: "Shop the latest laptops for work, gaming, and more.",
  },
];

const FeaturedProduct = () => {
  return (
    <section className="mt-20 px-4 md:px-14">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Featured Products</h2>
        <div className="mx-auto mt-3 w-32 h-1 rounded bg-gradient-to-r from-orange-500 to-red-500"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map(({ id, image, title, description }) => (
          <div
            key={id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <Image
              src={image}
              alt={title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
              <button className="mt-3 inline-flex items-center gap-2 px-5 py-2 bg-orange-600 hover:bg-orange-700 transition text-white rounded-full font-medium text-sm">
                Buy now
                <Image
                  src={assets.redirect_icon}
                  alt="Redirect Icon"
                  className="w-4 h-4"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProduct;
