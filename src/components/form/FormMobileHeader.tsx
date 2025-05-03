import React from 'react';
import Image from "next/image";
import { useFormContext } from "@/contexts/FormContext";
import { STEP_INFO } from "@/config/form-steps";
import ThemeToggle from "@/components/theme-toggle";
import { CodeBackground } from "@/components/ui/code-background";

export function FormMobileHeader() {
  const { currentStep } = useFormContext();
  const stepInfo = STEP_INFO[currentStep as keyof typeof STEP_INFO] || { title: "Intake Form", stepLabel: "" };

  return (
    <div className="md:hidden bg-gradient-to-r from-[#2757b3] to-[#1b4388] text-white p-4 relative overflow-hidden">
      <CodeBackground />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="w-20">
            <Image
              src="/junzi_text_logo.png"
              alt="Junzi Tech Solutions"
              width={80}
              height={20}
              className="w-full"
            />
          </div>
          <div>
            <ThemeToggle />
          </div>
        </div>
        <h1 className="text-lg font-medium mt-2">{stepInfo.title}</h1>
        {stepInfo.stepLabel && (
          <p className="text-sm opacity-75">{stepInfo.stepLabel}</p>
        )}
      </div>
    </div>
  );
} 