"use client";
import React from "react";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk();

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-4 border-b border-gray-200 text-gray-700 bg-white shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push("/")}
        src={assets.logo}
        alt="logo"
        priority
      />

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-6">
        <Link href="/" className="hover:text-orange-600 transition font-medium">
          Home
        </Link>
        <Link
          href="/all-products"
          className="hover:text-orange-600 transition font-medium"
        >
          Shop
        </Link>
        <Link href="/" className="hover:text-orange-600 transition font-medium">
          About Us
        </Link>
        <Link href="/" className="hover:text-orange-600 transition font-medium">
          Contact
        </Link>
        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-sm border border-orange-600 text-orange-600 px-4 py-1.5 rounded-full hover:bg-orange-50 transition"
          >
            Seller Dashboard
          </button>
        )}
      </div>

      {/* Desktop Right Side */}
      <ul className="hidden md:flex items-center gap-5">
        <Image
          className="w-5 h-5 cursor-pointer hover:opacity-80 transition"
          src={assets.search_icon}
          alt="search icon"
        />
        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="Cart"
                labelIcon={<CartIcon />}
                onClick={() => router.push("/cart")}
              />
              <UserButton.Action
                label="My Orders"
                labelIcon={<BagIcon />}
                onClick={() => router.push("/my-orders")}
              />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button
            onClick={openSignIn}
            className="flex items-center gap-2 hover:text-orange-600 transition font-medium"
          >
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>
        )}
      </ul>

      {/* Mobile Right Side */}
      <div className="flex items-center lg:hidden gap-3">
        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-sm border border-orange-600 text-orange-600 px-3 py-1 rounded-full hover:bg-orange-50 transition"
          >
            Seller
          </button>
        )}
        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="Home"
                labelIcon={<HomeIcon />}
                onClick={() => router.push("/")}
              />
              <UserButton.Action
                label="Products"
                labelIcon={<BoxIcon />}
                onClick={() => router.push("/all-products")}
              />
              <UserButton.Action
                label="Cart"
                labelIcon={<CartIcon />}
                onClick={() => router.push("/cart")}
              />
              <UserButton.Action
                label="My Orders"
                labelIcon={<BagIcon />}
                onClick={() => router.push("/my-orders")}
              />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button
            onClick={openSignIn}
            className="flex items-center gap-2 hover:text-orange-600 transition font-medium"
          >
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
