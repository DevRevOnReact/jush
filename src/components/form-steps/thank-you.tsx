"use client";

import { useFormContext } from "@/contexts/FormContext";
import { AnimatedFormContainer } from "@/components/shared/containers/AnimatedFormContainer";
import { StatusMessage } from "@/components/shared/status/StatusMessage";
import { CalendarEmbed } from "@/components/shared/calendar/CalendarEmbed";
import { CheckCircle, Phone } from "lucide-react";
import junziTextLogo from "@/assets/junzi_text_logo.png";
import { useState } from "react";
import { useHubSpot } from "@/api/hooks/useHubSpot";
import { toast } from "@/hooks/use-toast";
import { prepareHubSpotFields } from "@/utils/hubspot";

export default function ThankYouPage() {
  const { formData } = useFormContext();
  const [submitted, setSubmitted] = useState(false);
  const { submitForm } = useHubSpot();

  const handleSubmit = async () => {
    try {
      const hubspotFields = prepareHubSpotFields(formData);

      await submitForm.mutateAsync({
        fields: hubspotFields,
        context: {
          pageUri: window.location.href,
          pageName: "Intake Form Submission",
        },
      });

      setSubmitted(true);
      toast({
        title: "Success!",
        description: "Your information has been submitted successfully.",
      });
    } catch (error) {
      console.error("Error submitting to HubSpot:", error);
      toast({
        title: "Error",
        description: "Failed to submit your information. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <AnimatedFormContainer>
      {/* Success check icon */}
      <div className="flex justify-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
      </div>

      {/* Logo */}
      <div className="flex justify-center items-center mb-6">
        <div className="w-32 md:w-40">
          <img
            src={typeof junziTextLogo === "string" ? junziTextLogo : junziTextLogo.src}
            alt="Junzi Tech Solutions"
            className="w-full"
          />
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
        Thank You!
      </h2>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <p className="text-gray-600 mb-6 text-center">
          Your information has been submitted successfully. Please schedule a
          call with our team below.
        </p>

        {!submitted ? (
          <div className="space-y-6 flex flex-col items-center justify-center w-full">
            <div className="w-full">
              <CalendarEmbed />
            </div>

            <button
              onClick={handleSubmit}
              className={`px-8 py-2.5 rounded-xl transition-colors min-w-[200px] ${
                submitForm.isPending
                  ? "opacity-50 cursor-not-allowed bg-[#6B8EE7] text-white"
                  : "bg-[#2757b3] text-white hover:bg-[#224a96]"
              }`}
              disabled={submitForm.isPending}
            >
              {submitForm.isPending ? "Submitting..." : "Submit"}
            </button>
          </div>
        ) : (
          <div className="space-y-4 max-w-2xl mx-auto">
            <StatusMessage
              variant="success"
              icon={CheckCircle}
              title="Preference Submitted"
              message="We've received your follow-up preference. Our team will be in touch soon!"
            />

            <StatusMessage
              variant="info"
              icon={Phone}
              title="Need immediate assistance?"
              message="Call us at (800) 555-0123 or email support@junzitech.com"
            />
          </div>
        )}
      </div>
    </AnimatedFormContainer>
  );
}
