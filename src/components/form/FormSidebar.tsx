import React from 'react';
import Image from "next/image";
import { useFormContext } from "@/contexts/FormContext";
import { FORM_STEPS } from "@/config/form-steps";
import { CodeBackground } from "@/components/ui/code-background";

export function FormSidebar() {
  const { currentStep, setCurrentStep } = useFormContext();

  return (
    <div className="hidden md:block relative bg-[#2757b3] text-white p-6 w-[300px] overflow-hidden">
      <CodeBackground />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center mb-10">
          <div className="w-24">
            <Image
              src="/junzi_text_logo.png"
              alt="Junzi Tech Solutions"
              width={96}
              height={24}
              className="w-full"
            />
          </div>
        </div>

        {/* Step indicators */}
        <div className="space-y-2">
          {FORM_STEPS.map((step, index) => (
            <div
              key={step.id}
              className={`
                flex items-start space-x-3 p-2 
                ${currentStep === step.id ? "bg-[#1b4388] rounded-xl" : ""}
                ${currentStep > step.id ? "cursor-pointer hover:bg-[#1b4388]/50" : ""}
              `}
              onClick={() => {
                if (currentStep > step.id) {
                  setCurrentStep(step.id);
                }
              }}
            >
              <div className="relative">
                <div
                  className={`
                  w-8 h-8 rounded-full flex items-center justify-center transition-all
                  ${
                    currentStep === step.id
                      ? "bg-white text-[#2757b3] ring-4 ring-[#3f6bc2]/30"
                      : currentStep > step.id
                      ? "bg-white text-[#2757b3]"
                      : "bg-[#3f6bc2] text-white"
                  }
                `}
                >
                  {step.icon}
                </div>
                {index < FORM_STEPS.length - 1 && (
                  <div
                    className={`
                    absolute top-8 left-4 w-[2px] h-10
                    ${currentStep > step.id ? "bg-white" : "bg-[#3f6bc2]"}
                  `}
                  ></div>
                )}
              </div>
              <div>
                <h3
                  className={`font-medium ${
                    currentStep === step.id ? "text-white" : ""
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-sm ${
                    currentStep === step.id ? "text-white" : "opacity-75"
                  }`}
                >
                  {step.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-20">
          <p className="text-xs opacity-60">
            All rights reserved © Junzi Tech Solutions
          </p>
        </div>
      </div>
    </div>
  );
} 