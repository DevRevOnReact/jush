"use client";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import  Brands  from "./Brands";
import Link from "next/link";
import CalButton from "./CalButton";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row bg-[#F3F3F3] overflow-hidden">
        <div className="max-w-7xl mx-auto lg:flex lg:items-center lg:justify-between w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 lg:text-left text-center"
          >
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-5xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">
                    Launch Your Mobile
                    <span className="leading-[50px] text-[80px] text-orange-500">
                      /
                    </span>
                    Web App in 4 Weeks
                  </span>
                </h1>
                <p className="mt-3 text-base text-black sm:mt-5 sm:text-[16px] sm:max-w-xl sm:mx-auto md:mt-5 md:text-[16px] lg:mx-0">
                  Transform your idea into a robust, functional, and
                  market-ready app in just 4 weeks, with our tailored design and
                  development solutions starting at $10k.{" "}
                  <span className="text-orange-500 font-semibold">
                    Limited Spots Available - Act Now!
                  </span>
                </p>
                <div className="mt-5 sm:mt-8 flex justify-center lg:justify-start">
                <Link 
                    href="/form"
                    className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gray-900 hover:bg-gray-800 md:py-4 md:text-lg md:px-10"
                  >
                    Lets Get Started
                  </Link>
                </div>
                <div className="mt-6 flex items-center sm:justify-center lg:justify-start">
                  <Star
                    className="h-5 w-5 text-orange-500"
                    fill="currentColor"
                  />
                  <span className="ml-2 text-gray-600">
                    <span className="font-semibold">Excellent</span> 4.9 out of
                    5
                  </span>
                </div>
              </div>
            </main>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:w-1/2 lg:flex lg:justify-center lg:items-center"
          >
            <div className="h-56 w-full object-cover lg:w-full lg:h-full">
              <div className="w-full h-full">
                <img
                  src="/hero_rmbg.png"
                  alt="hero"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Brands />
    </>
  );
};

export default Hero;
