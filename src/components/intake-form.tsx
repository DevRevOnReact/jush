"use client";

import React from "react";
import { useFormContext } from "@/contexts/FormContext";
import { AnimatePresence } from "framer-motion";
import { FormSidebar } from "@/components/form/FormSidebar";
import { FormMobileHeader } from "@/components/form/FormMobileHeader";
import { SPECIAL_STEPS } from "@/config/form-steps";

// Form Steps
import Welcome from "@/components/form-steps/welcome";
import Step1 from "@/components/form-steps/step1";
import Step2 from "@/components/form-steps/step2";
import Step3 from "@/components/form-steps/step3";
import ThankYouPage from "@/components/form-steps/thank-you";
import NoInterestStep from "@/components/form-steps/no-interest";

export default function IntakeForm() {
  const { currentStep } = useFormContext();

  // Render the appropriate step based on current step
  const renderStep = () => {
    switch (currentStep) {
      case SPECIAL_STEPS.WELCOME:
        return <Welcome />;
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case SPECIAL_STEPS.THANK_YOU:
        return <ThankYouPage />;
      case SPECIAL_STEPS.NO_INTEREST:
        return <NoInterestStep />;
      default:
        return <Welcome />;
    }
  };

  // If we're on the welcome screen or thank you page, show a simplified layout
  if (currentStep === SPECIAL_STEPS.WELCOME || currentStep === SPECIAL_STEPS.THANK_YOU) {
    return (
      <div className="bg-[#eef2f6] min-h-screen flex justify-center items-center p-4 md:p-8">
        <div className="w-full max-w-xl bg-white rounded-2xl overflow-hidden shadow-xl">
          {/* Welcome Content or Thank You Content */}
          <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
        </div>

        {/* Theme Toggle - Keep for development */}
      </div>
    );
  }

  return (
    <div className="bg-[#eef2f6] min-h-screen flex justify-center items-center p-4 md:p-8">
      <div className="w-full max-w-5xl bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row h-[min(90vh,800px)] md:h-[600px]">
        {/* Desktop Sidebar */}
        <FormSidebar />

        {/* Mobile Header */}
        <FormMobileHeader />

        {/* Main Content Area */}
        <div className="flex-1 overflow-auto">
          <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
        </div>
      </div>
    </div>
  );
}
