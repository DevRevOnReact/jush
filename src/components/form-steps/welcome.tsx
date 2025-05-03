"use client";

import { useFormContext } from "@/contexts/FormContext";
import { motion } from "framer-motion";
import { CheckCircle2, Code, Coins, Gift } from "lucide-react";
import Image from "next/image";
import junziTextLogo from "@/assets/junzi_text_logo.png";

export default function Welcome() {
  const { setCurrentStep } = useFormContext();

  const handleStart = () => {
    setCurrentStep(1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="text-center space-y-4 md:space-y-6 py-4 md:py-8 relative"
    >
      {/* Code-themed pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden font-mono">
        {/* Code pattern lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Horizontal lines */}
          <div
            className="absolute w-full h-[1px] bg-blue-700"
            style={{ top: "20%" }}
          ></div>
          <div
            className="absolute w-full h-[1px] bg-blue-700"
            style={{ top: "40%" }}
          ></div>
          <div
            className="absolute w-full h-[1px] bg-blue-700"
            style={{ top: "60%" }}
          ></div>
          <div
            className="absolute w-full h-[1px] bg-blue-700"
            style={{ top: "80%" }}
          ></div>

          {/* Vertical lines */}
          <div
            className="absolute w-[1px] h-full bg-blue-700"
            style={{ left: "20%" }}
          ></div>
          <div
            className="absolute w-[1px] h-full bg-blue-700"
            style={{ left: "40%" }}
          ></div>
          <div
            className="absolute w-[1px] h-full bg-blue-700"
            style={{ left: "60%" }}
          ></div>
          <div
            className="absolute w-[1px] h-full bg-blue-700"
            style={{ left: "80%" }}
          ></div>
        </div>

        {/* Binary code dots */}
        <div className="absolute inset-0">
          <div className="absolute top-[10%] left-[10%] w-1 h-1 rounded-full bg-blue-700"></div>
          <div className="absolute top-[15%] left-[20%] w-1 h-1 rounded-full bg-blue-700"></div>
          <div className="absolute top-[25%] left-[15%] w-1 h-1 rounded-full bg-blue-700"></div>
          <div className="absolute top-[30%] left-[25%] w-1 h-1 rounded-full bg-blue-700"></div>
          <div className="absolute top-[40%] left-[30%] w-1 h-1 rounded-full bg-blue-700"></div>
          <div className="absolute top-[45%] left-[15%] w-1 h-1 rounded-full bg-blue-700"></div>
          <div className="absolute top-[55%] left-[25%] w-1 h-1 rounded-full bg-blue-700"></div>
          <div className="absolute top-[65%] left-[10%] w-1 h-1 rounded-full bg-blue-700"></div>
          <div className="absolute top-[75%] left-[30%] w-1 h-1 rounded-full bg-blue-700"></div>
          <div className="absolute top-[85%] left-[20%] w-1 h-1 rounded-full bg-blue-700"></div>

          <div className="absolute top-[12%] right-[10%] w-1 h-1 rounded-full bg-blue-700"></div>
          <div className="absolute top-[22%] right-[15%] w-1 h-1 rounded-full bg-blue-700"></div>
          <div className="absolute top-[32%] right-[20%] w-1 h-1 rounded-full bg-blue-700"></div>
          <div className="absolute top-[42%] right-[25%] w-1 h-1 rounded-full bg-blue-700"></div>
          <div className="absolute top-[52%] right-[15%] w-1 h-1 rounded-full bg-blue-700"></div>
          <div className="absolute top-[62%] right-[25%] w-1 h-1 rounded-full bg-blue-700"></div>
          <div className="absolute top-[72%] right-[10%] w-1 h-1 rounded-full bg-blue-700"></div>
          <div className="absolute top-[82%] right-[20%] w-1 h-1 rounded-full bg-blue-700"></div>
        </div>

        {/* Code brackets */}
        <div className="absolute w-16 h-16 border-t-2 border-l-2 border-blue-700 top-4 left-4 opacity-30"></div>
        <div className="absolute w-16 h-16 border-t-2 border-r-2 border-blue-700 top-4 right-4 opacity-30"></div>
        <div className="absolute w-16 h-16 border-b-2 border-l-2 border-blue-700 bottom-4 left-4 opacity-30"></div>
        <div className="absolute w-16 h-16 border-b-2 border-r-2 border-blue-700 bottom-4 right-4 opacity-30"></div>
      </div>
      {/* Company Logo */}
      <div className="flex justify-center items-center">
        <div className="w-32 md:w-48">
          <img
            src={
              typeof junziTextLogo === "string"
                ? junziTextLogo
                : junziTextLogo.src
            }
            alt="Junzi Tech Solutions"
            className="w-full"
          />
        </div>
      </div>

      <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
        Affordable Software Development
      </h1>

      <div className="max-w-md mx-auto">
        <div className="space-y-4 text-left">
          <div className="flex items-start">
            <div className="bg-[#eef7ff] p-2 rounded-full mr-3">
              <CheckCircle2 className="w-5 h-5 text-[#2757b3]" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">
                High-quality software
              </h3>
              <p className="text-sm text-gray-600">
                Get high-quality software at a fraction of the market price
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-[#eef7ff] p-2 rounded-full mr-3">
              <Coins className="w-5 h-5 text-[#2757b3]" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">
                Flexible payment options
              </h3>
              <p className="text-sm text-gray-600">
                Choose between payments, subscriptions, or equity
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-[#eef7ff] p-2 rounded-full mr-3">
              <Code className="w-5 h-5 text-[#2757b3]" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">
                AI-powered templates
              </h3>
              <p className="text-sm text-gray-600">
                AI includes specific templates customized to your needs
              </p>
            </div>
          </div>
        </div>

        {/* Reward Box */}
        <div className="bg-[#f0f7ff] p-4 rounded-lg border border-blue-100 text-left mt-6 flex items-start">
          <div className="bg-blue-100 p-2 rounded-full mr-3 flex-shrink-0">
            <Gift className="w-5 h-5 text-[#2757b3]" />
          </div>
          <div>
            <h3 className="font-medium text-[#2757b3]">Free Prototype</h3>
            <p className="text-sm text-gray-700">
              Complete this form to receive a free prototype of your app or
              software idea from our team!
            </p>
          </div>
        </div>
      </div>

      <button
        className="bg-[#2757b3] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-md text-base md:text-lg font-medium hover:bg-[#224a96] transition-colors"
        onClick={handleStart}
      >
        Get Started
      </button>

      <p className="text-xs md:text-sm text-gray-500 pt-2 md:pt-4 px-4 md:px-0">
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </p>
    </motion.div>
  );
}
