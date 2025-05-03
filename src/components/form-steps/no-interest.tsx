"use client";

import { useFormContext } from "@/contexts/FormContext";
import { motion } from "framer-motion";
import { XCircle } from "lucide-react";
import junziTextLogo from "@/assets/junzi_text_logo.png";

export default function NoInterestStep() {
  const { resetForm } = useFormContext();

  const handleStartOver = () => {
    resetForm();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="text-center space-y-6 py-8 px-4"
    >
      {/* Icon */}
      <div className="flex justify-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
          <XCircle className="w-8 h-8 text-red-500" />
        </div>
      </div>

      {/* Company Logo */}
      <div className="flex justify-center">
        <div className="w-32">
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

      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">No Problem!</h1>
        <p className="text-gray-600 max-w-md mx-auto">
          We understand that our services might not be the right fit for your
          needs at this time.
        </p>
      </div>

      {/* Alternative Options */}
      <div className="bg-gray-50 p-4 rounded-lg max-w-md mx-auto text-left">
        <h3 className="font-medium text-gray-800 mb-3">Other Options</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>• Check out our blog for DIY development tips</li>
          <li>• Subscribe to our newsletter for future updates</li>
          <li>• Follow us on social media for tech insights</li>
        </ul>
      </div>

      <button
        onClick={handleStartOver}
        className="bg-gray-200 text-gray-700 px-6 py-2.5 rounded-md hover:bg-gray-300 transition-colors"
      >
        Start Over
      </button>

      <p className="text-sm text-gray-500">
        Feel free to come back anytime if you change your mind!
      </p>
    </motion.div>
  );
}
