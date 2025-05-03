"use client"
import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useFormContext as useAppFormContext, FormProvider as AppFormProvider } from '@/contexts/FormContext';
import { FormSteps } from '@/components/forms/FormSteps';
import { FormStep } from '@/components/forms/FormStep';
import { FormField } from '@/components/forms/FormField';
import { TextArea } from '@/components/forms/TextArea';
import { Checkbox } from '@/components/forms/Checkbox';
import { useToast } from '@/components/ui/use-toast';
import { ThankYouPage } from '@/components/forms/ThankYouPage';
import dynamic from 'next/dynamic';
import { User, Building2, UserCog } from "lucide-react";

// Load ThemeToggle dynamically to prevent SSR issues
const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), { 
  ssr: false 
});

const steps = [
  {
    id: 0,
    title: 'Personal Info',
    description: 'Basic information about you',
  },
  {
    id: 1,
    title: 'Contact',
    description: 'How to reach you',
  },
  {
    id: 2,
    title: 'Message',
    description: 'Your request details',
  },
];

// Only render on client-side to avoid server rendering issues
const ClientOnlyForm: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return (
      <div className="bg-[#eef2f6] min-h-screen flex justify-center items-center p-4 md:p-8">
        <div className="w-full max-w-5xl bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row h-[min(90vh,800px)] md:h-[600px]">
          <div className="flex-1 p-3 md:p-8 flex flex-col">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
                Loading form...
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return <>{children}</>;
};

const IntakeFormContent: React.FC = () => {
  const { toast } = useToast();
  const { currentStep, setCurrentStep, formData, updateFormData, resetForm } = useAppFormContext();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Set up react-hook-form
  const methods = useForm({
    defaultValues: formData,
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      // Add your form submission logic here
      toast({
        title: 'Success',
        description: 'Your form has been submitted successfully.',
      });
      setIsSubmitted(true);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleReset = () => {
    resetForm();
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return <ThankYouPage onReset={handleReset} />;
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <FormStep
            title="Personal Information"
            description="Please provide your basic information"
            onNext={handleNext}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField
                name="firstName"
                label="First Name"
                placeholder="John"
                required
              />
              <FormField
                name="lastName"
                label="Last Name"
                placeholder="Doe"
                required
              />
            </div>
          </FormStep>
        );
      case 1:
        return (
          <FormStep
            title="Contact Information"
            description="How can we reach you?"
            onNext={handleNext}
            onBack={handleBack}
          >
            <FormField
              name="email"
              label="Email"
              type="email"
              placeholder="john@example.com"
              required
            />
            <FormField
              name="phone"
              label="Phone"
              type="tel"
              placeholder="+1234567890"
              required
            />
          </FormStep>
        );
      case 2:
        return (
          <FormStep
            title="Your Message"
            description="Tell us how we can help you"
            onNext={handleSubmit}
            onBack={handleBack}
            isLastStep
          >
            <TextArea
              name="message"
              label="Message"
              placeholder="How can we help you?"
              rows={4}
            />
            <Checkbox
              name="terms"
              label="I agree to the terms and conditions"
              required
            />
          </FormStep>
        );
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="bg-[#eef2f6] min-h-screen flex justify-center items-center p-4 md:p-8">
        <div className="w-full max-w-5xl bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row h-[min(90vh,800px)] md:h-[600px]">
          {/* Desktop Sidebar (hidden on mobile) */}
          <div className="hidden md:block relative bg-[#2757b3] text-white p-6 w-[300px] overflow-hidden">
            {/* Code-themed pattern background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none font-mono">
              {/* Code pattern lines */}
              <div className="absolute top-0 left-0 w-full h-full">
                {/* Horizontal code pattern lines */}
                <div className="absolute w-full h-px bg-white top-[20%]"></div>
                <div className="absolute w-full h-px bg-white top-[40%]"></div>
                <div className="absolute w-full h-px bg-white top-[60%]"></div>
                <div className="absolute w-full h-px bg-white top-[80%]"></div>

                {/* Vertical code pattern lines */}
                <div className="absolute w-px h-full bg-white left-[20%]"></div>
                <div className="absolute w-px h-full bg-white left-[40%]"></div>
                <div className="absolute w-px h-full bg-white left-[60%]"></div>
                <div className="absolute w-px h-full bg-white left-[80%]"></div>
              </div>

              {/* Binary code dots */}
              <div className="absolute inset-0">
                <div className="absolute top-[10%] left-[10%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[15%] left-[20%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[25%] left-[15%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[30%] left-[25%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[40%] left-[30%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[45%] left-[15%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[55%] left-[25%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[65%] left-[10%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[75%] left-[30%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[85%] left-[20%] w-1 h-1 rounded-full bg-white"></div>

                <div className="absolute top-[12%] right-[10%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[22%] right-[15%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[32%] right-[20%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[42%] right-[25%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[52%] right-[15%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[62%] right-[25%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[72%] right-[10%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[82%] right-[20%] w-1 h-1 rounded-full bg-white"></div>
              </div>

              {/* Code brackets */}
              <div className="absolute w-16 h-16 border-t-2 border-l-2 border-white top-4 left-4 opacity-30"></div>
              <div className="absolute w-16 h-16 border-t-2 border-r-2 border-white top-4 right-4 opacity-30"></div>
              <div className="absolute w-16 h-16 border-b-2 border-l-2 border-white bottom-4 left-4 opacity-30"></div>
              <div className="absolute w-16 h-16 border-b-2 border-r-2 border-white bottom-4 right-4 opacity-30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center mb-10">
                <div className="w-24">
                  <h1 className="text-xl font-bold text-white">Junzi Tech</h1>
                </div>
              </div>

              {/* Step indicators */}
              <div className="space-y-2">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`
                      flex items-start space-x-3 p-4 rounded-[16px] transition-colors 
                      ${currentStep === step.id ? "bg-[#1b4388]/40" : ""}
                      ${
                        currentStep > step.id
                          ? "cursor-pointer hover:bg-[#1b4388]/30"
                          : ""
                      }
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
                        w-10 h-10 rounded-full flex items-center justify-center transition-all
                        ${
                          currentStep === step.id
                            ? "bg-white text-[#2757b3] ring-2 ring-white/30"
                            : currentStep > step.id
                            ? "bg-white text-[#2757b3]"
                            : "bg-[#3f6bc2] text-white"
                        }
                      `}
                      >
                        {step.id === 0 && <User className="w-5 h-5" />}
                        {step.id === 1 && <Building2 className="w-5 h-5" />}
                        {step.id === 2 && <UserCog className="w-5 h-5" />}
                      </div>
                      {index < steps.length - 1 && (
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
                        {step.description}
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

          {/* Mobile Header with Navigation (visible only on mobile) */}
          <div className="md:hidden bg-gradient-to-r from-[#2757b3] to-[#1b4388] text-white p-4 relative overflow-hidden">
            {/* Code-themed pattern background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none font-mono">
              {/* Code pattern dots */}
              <div className="absolute inset-0">
                <div className="absolute top-[20%] left-[10%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[30%] left-[20%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[40%] left-[30%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[50%] left-[40%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[60%] left-[50%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[70%] left-[60%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[80%] left-[70%] w-1 h-1 rounded-full bg-white"></div>

                <div className="absolute top-[25%] right-[10%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[35%] right-[20%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[45%] right-[30%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[55%] right-[40%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[65%] right-[50%] w-1 h-1 rounded-full bg-white"></div>
                <div className="absolute top-[75%] right-[60%] w-1 h-1 rounded-full bg-white"></div>
              </div>
            </div>

            <div className="relative z-10 flex justify-between items-center mb-3">
              <div className="w-20">
                <h1 className="text-lg font-bold text-white">Junzi Tech</h1>
              </div>
            </div>

            {/* Horizontal Step Indicators for Mobile */}
            <div className="relative z-10 pb-3">
              {/* Progress line in background */}
              <div className="absolute left-0 right-0 h-[3px] top-5 mx-[20px]">
                <div className="h-full w-full bg-[#3f6bc2] rounded-full"></div>
                <div
                  className="h-full bg-white absolute left-0 top-0 transition-all rounded-full"
                  style={{
                    width: `${
                      currentStep === 1
                        ? "0%"
                        : currentStep === 2
                        ? "50%"
                        : "100%"
                    }`,
                  }}
                ></div>
              </div>

              {/* Step circles */}
              <div className="flex justify-between items-center relative px-[10px]">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`
                      flex flex-col items-center z-10
                      ${currentStep > step.id ? "cursor-pointer" : ""}
                    `}
                    onClick={() => {
                      // Only allow clicking to completed steps
                      if (currentStep > step.id) {
                        setCurrentStep(step.id);
                      }
                    }}
                  >
                    <div
                      className={`
                      w-10 h-10 rounded-full flex items-center justify-center transition-all mb-1
                      ${
                        currentStep === step.id
                          ? "bg-white text-[#2757b3] ring-4 ring-[#3f6bc2]/30 shadow-lg"
                          : currentStep > step.id
                          ? "bg-white text-[#2757b3] hover:ring-2 hover:ring-white/50"
                          : "bg-[#3f6bc2] text-white"
                      }
                    `}
                    >
                      {step.id === 0 && <User className="w-5 h-5" />}
                      {step.id === 1 && <Building2 className="w-5 h-5" />}
                      {step.id === 2 && <UserCog className="w-5 h-5" />}
                    </div>
                    <span
                      className={`text-xs text-center ${
                        currentStep === step.id
                          ? "font-bold text-white"
                          : "opacity-85"
                      }`}
                    >
                      {step.title.split(" ")[0]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-3 md:p-8 flex flex-col">
            <div>
              <div className="text-xs md:text-sm text-gray-500 mb-1">
                {currentStep === 0 ? "Welcome" : currentStep === 1 ? "User Information" : "Message"}
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
                {currentStep === 0 ? "Welcome" : currentStep === 1 ? "User Information" : "Message"}
              </h2>
            </div>

            {/* Form Content - Fixed height with scroll if needed */}
            <div className="flex-1 overflow-y-auto pt-1 md:pt-2">
              {renderStepContent()}
            </div>
          </div>
        </div>

        {/* Theme Toggle - Keep for development */}
        <div className="fixed top-4 right-4 z-10">
          <ThemeToggle />
        </div>
      </div>
    </FormProvider>
  );
};

// Wrap with FormProvider to fix server-side rendering issues
const IntakeForm: React.FC = () => {
  return (
    <ClientOnlyForm>
      <AppFormProvider>
        <IntakeFormContent />
      </AppFormProvider>
    </ClientOnlyForm>
  );
};

// Add this for Next.js static generation
export async function getStaticProps() {
  return {
    props: {},
  };
}

export default IntakeForm;
