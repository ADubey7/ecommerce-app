import React from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';

const ProductCard = ({ product }) => {
  const { currency, router } = useAppContext();

  return (
    <div
      onClick={() => {
        router.push('/product/' + product._id);
        scrollTo(0, 0);
      }}
      className="flex flex-col items-start gap-1 max-w-[220px] w-full cursor-pointer bg-white/5 hover:bg-white/10 rounded-xl p-3 shadow-lg transition-all duration-300"
    >
      <div className="relative w-full h-52 overflow-hidden rounded-lg flex items-center justify-center bg-white/10 group">
        <Image
          src={product.image[0]}
          alt={product.name}
          className="object-cover group-hover:scale-110 transition-transform w-full h-full rounded-lg"
          width={800}
          height={800}
        />
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform">
          <Image
            className="h-4 w-4"
            src={assets.heart_icon}
            alt="heart_icon"
          />
        </button>
      </div>

      <p className="text-sm font-semibold pt-2 w-full truncate text-white">{product.name}</p>
      <p className="w-full text-xs text-gray-400 max-sm:hidden truncate">{product.description}</p>

      <div className="flex items-center gap-2 mt-1">
        <p className="text-xs text-yellow-400">{4.5}</p>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Image
              key={index}
              className="h-3 w-3"
              src={
                index < Math.floor(4) ? assets.star_icon : assets.star_dull_icon
              }
              alt="star_icon"
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between w-full mt-2">
        <p className="text-base font-medium text-green-400">
          {currency}{product.offerPrice}
        </p>
        <button className="hidden sm:inline-block px-4 py-1.5 text-xs text-white bg-orange-600 hover:bg-orange-500 rounded-full transition">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
