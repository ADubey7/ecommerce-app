'use client';
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";

const AllProducts = () => {
    const { products } = useAppContext();

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center px-8 md:px-16 lg:px-32 bg-[#0f172a] text-white py-8 min-h-screen">
                <div className="text-center mb-10">
                <p className="text-3xl font-semibold text-white">Browse Our Products</p>
                    <div className="mx-auto w-24 h-1 bg-gradient-to-r from-orange-600 to-yellow-500 mt-2 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-6 w-full">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AllProducts;
