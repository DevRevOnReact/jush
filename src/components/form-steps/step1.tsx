"use client";

import { useFormContext } from "@/contexts/FormContext";
import { FormInput } from "@/components/shared/inputs/FormInput";
import { CustomPhoneInput } from "@/components/shared/inputs/PhoneInput";
import { NavigationButton } from "@/components/shared/buttons/NavigationButton";
import { AnimatedFormContainer } from "@/components/shared/containers/AnimatedFormContainer";
import { Country } from "@/types/form";

export default function Step1() {
  const { formData, updateFormData, setCurrentStep } = useFormContext();

  const handleInputChange = (field: string, value: string) => {
    updateFormData({ [field]: value });
  };

  const handlePhoneChange = (value: string, country: Country) => {
    updateFormData({
      phone: value.slice(country.dialCode.length),
      countryCode: country.dialCode,
    });
  };

  const handleNextStep = () => {
    if (formData.name && formData.email && formData.phone) {
      setCurrentStep(2);
    }
  };

  const isFormValid = formData.name && formData.email && formData.phone;

  return (
    <AnimatedFormContainer
      title="User Information"
      subtitle="Tell us about yourself if you are serious about your idea."
    >
      <div className="space-y-6">
        <FormInput
          label="Full name"
          type="text"
          placeholder="John Doe"
          value={formData.name || ""}
          onChange={(value) => handleInputChange("name", value)}
        />

        <FormInput
          label="Email"
          type="email"
          placeholder="johndoe123@gmail.com"
          value={formData.email || ""}
          onChange={(value) => handleInputChange("email", value)}
        />

        <CustomPhoneInput
          value={`${formData.countryCode || ""}${formData.phone || ""}`}
          onChange={handlePhoneChange}
        />
      </div>

      <div className="mt-8">
        <NavigationButton
          variant="primary"
          onClick={handleNextStep}
          disabled={!isFormValid}
          eventName="form_step_completed"
          eventData={{
            step_number: 1,
            step_name: "User Information"
          }}
        >
          Next
        </NavigationButton>
      </div>
    </AnimatedFormContainer>
  );
}
