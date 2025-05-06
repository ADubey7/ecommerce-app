'use client';
import React from "react";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import FeaturedProduct from "@/components/FeaturedProduct";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="bg-navy-900 text-white px-6 md:px-16 lg:px-32 py-10 space-y-24">
        <section>
          <HeaderSlider />
        </section>

        <section>
          <HomeProducts />
        </section>

        <section>
          <FeaturedProduct />
        </section>

        <section className="bg-gradient-to-r from-teal-500 to-green-500 p-10 rounded-2xl shadow-xl">
          <Banner />
        </section>

        <section>
          <NewsLetter />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;